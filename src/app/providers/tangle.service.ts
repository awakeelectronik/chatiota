import { Injectable } from '@angular/core';

import { composeAPI, createGetAccountData } from '@iota/core';
import { asciiToTrytes } from '@iota/converter';
import { extractJson } from '@iota/extract-json';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class TangleService {
  private iota = composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
  });

  constructor(private userData: UserData) { 
  }

  setAddressFromSeed(seed){
    this.iota.getAccountData(seed)
      .then(acc => {
        console.log(acc)
        // if(acc.transactions.length>0)this.getTransactionFromHash(acc.transactions[0])
        this.userData.setAddress(acc.addresses[0])
      })
      .catch(err => console.log(err))
  }

  getTransactions(): Promise<any> {
    var q = []
    return this.userData.getSeed()
      .then(seed => {
        return this.iota.getAccountData(seed)
      }).then(acc => {
        acc.transactions.forEach(trans => {
          q.push(this.getTransactionFromHash(trans))
        });
        return Promise.all(q) 
      })      
      .catch(err => console.log(err))
  }

  sendMessage(message: String, addressReceiver: string){
    this.userData.getAddress().then(senderAddress => {
        // these two below lines create the record on both wallets (sender and receiver)
        this.sendTo({"message": message, "sender": senderAddress}, addressReceiver)
        this.sendTo({"message": message, "receiver": addressReceiver}, senderAddress)
      })
      .catch(err => {
        console.error(err);
      })
  }

  private sendTo(message: object, addressReceiver: string){
    const messageInTrytes = asciiToTrytes(JSON.stringify(message))
    const transfers = [
      {
        value: 0,
        address: addressReceiver,
        message: messageInTrytes
      }
    ];
    this.userData.getSeed()
      .then(seed => {
        return this.iota.prepareTransfers(seed, transfers)
      })
      .then(trytes => {               
        return this.iota.sendTrytes(trytes, 3, 9);            
      })       
      .catch(err => {
        console.error(err);
      })
  }

  private getTransactionFromHash(hash): Promise<any> {
    return this.iota.getBundle(hash)
      .then(bundle => {
        let transaction = JSON.parse(extractJson(bundle).toString())
        transaction.date = bundle[0].timestamp
        return transaction
      })
      .catch(err => {
          console.error(err);
      });
  }
}
