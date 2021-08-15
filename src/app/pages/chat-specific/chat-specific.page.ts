import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TangleService } from '../../providers/tangle.service'
import { UserData } from '../../providers/user-data';
import { Conversation } from '../../interfaces/conversation';
import { Console } from 'console';

@Component({
  selector: 'app-chat-specific',
  templateUrl: './chat-specific.page.html',
  styleUrls: ['./chat-specific.page.scss'],
})

export class ChatSpecificPage implements OnInit {
  addressReceiver: string
  message: string
  conversation: Conversation

  constructor(private route: ActivatedRoute, 
    public userData: UserData,
    public tangle: TangleService) { }

  ngOnInit() {
      this.addressReceiver = this.route.snapshot.paramMap.get('chatId');
      this.userData.getConversation(this.addressReceiver).then(c => this.conversation=c)
  }

  
  send(){
    let messageToSend = this.message
    this.tangle.sendMessage(messageToSend, this.addressReceiver);
    this.message = ""
    this.conversation.messages.push({
      text: messageToSend,
      date: Math.trunc(Date.now()/1000).toString(),
      receiver: false})
  }

}
