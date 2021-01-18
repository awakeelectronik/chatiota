import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TangleService } from '../../providers/tangle.service';

@Component({
  selector: 'app-chat-new',
  templateUrl: './chat-new.page.html',
  styleUrls: ['./chat-new.page.scss'],
})
export class ChatNewPage implements OnInit {
  addressReceiver: string

  constructor(private router: Router, private tangle: TangleService) { }

  ngOnInit() {
    //this.tangle.sendMessage("un mensaje", "MZ9JP9NN9IFDCHNDNOCMBIREWZIK9KERVEQZ9RTKYFOXBUGLTGRND9FOQ9IRQXBNCMXHMKYWIGWXKYORZ");
  }

  startChat() {    
    console.log(this.addressReceiver)
    this.router.navigateByUrl(`/chats/${this.addressReceiver}`);
  }
}
