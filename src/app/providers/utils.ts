import { Injectable } from '@angular/core';

import { Conversation } from '../interfaces/conversation';

@Injectable({
  providedIn: 'root'
})
export class Utils {
// {message: string, receiver?: string, sender?: string}
  orderTransactions(transactions: Array<Object>): Conversation[] {
    var conversations: Conversation[] = []
    transactions.forEach(trans => {
      let index = conversations.findIndex(i => i.address==(trans["sender"] || trans["receiver"]))
      if(index==-1)conversations.push({address: trans["sender"] || trans["receiver"], messages: [{text: trans["message"], date:trans["date"]}]})
      else conversations[index].messages.push({text: trans["message"], date:trans["date"]})
    })

    return conversations
  }
}
