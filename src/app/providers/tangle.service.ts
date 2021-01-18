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
    // provider: 'http://199.192.21.9:14265'
    provider: 'https://nodes.thetangle.org:443'
  });

  constructor(private userData: UserData) { 
  }

  sendMessage(message: String, address: string){
    const messageInTrytes = asciiToTrytes(JSON.stringify({"message": message}));
    const transfers = [
        {
            value: 0,
            address: address,
            message: messageInTrytes
        }
    ];

    this.userData.getSeed()
    .then(seed => {
      return this.iota.prepareTransfers(seed, transfers)
    })
    .then(trytes => {               
      return this.iota.sendTrytes(trytes, 3, 14);            
    })                                                                                                                                                                            
    .then(bundle => {                                                                                                                                                                 
      const hash = bundle[0].hash                    
      console.log(bundle[0].hash)             
      return this.iota.getBundle(hash)   
    }) .then(bundle => {
      console.log(bundle)
      //console.log(JSON.parse(extractJson(bundle)));
    })
    .catch(err => {
      console.error(err);
    });

  }
}
