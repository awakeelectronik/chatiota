import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Conversation } from '../../interfaces/conversation';
import { UserData } from '../../providers/user-data';
import { TangleService } from '../../providers/tangle.service';
import { Utils } from '../../providers/utils';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.html',
  styleUrls: ['./chats.scss'],
})
export class Chats implements OnInit {
  conversations: Conversation[];
  //wallet: string;




  constructor(
    public router: Router,
    public userData: UserData,
    private tangle: TangleService,
    private utils: Utils
  ) { }

  ngOnInit() {
    this.tangle.getTransactions()
      .then(transactions => {
        console.log(transactions)
        console.log(this.utils.orderTransactions(transactions))
      })
  }
}
