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
  }

  startChat() {    
    if(this.validation())
      this.router.navigateByUrl(`/chats/${this.addressReceiver}`);
    else 
      //TODO lanzar notificación de dirección incorrecta
      console.log("-.")
  }

  validation(): boolean {
    if(this.addressReceiver.length==81)
      return true;
    else return false
  }
}
