import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TangleService } from '../../providers/tangle.service'
import { UserData } from '../../providers/user-data';
@Component({
  selector: 'app-chat-specific',
  templateUrl: './chat-specific.page.html',
  styleUrls: ['./chat-specific.page.scss'],
})
export class ChatSpecificPage implements OnInit {
  addressReceiver: string
  message: string

  constructor(private route: ActivatedRoute, 
    public userData: UserData,
    public tangle: TangleService) { }

  ngOnInit() {
      this.addressReceiver = this.route.snapshot.paramMap.get('chatId');
  }

  
  send(){
    let messageToSend = this.message
    this.tangle.sendMessage(messageToSend, this.addressReceiver);
    this.message = ""
  }

}
