import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-specific',
  templateUrl: './chat-specific.page.html',
  styleUrls: ['./chat-specific.page.scss'],
})
export class ChatSpecificPage implements OnInit {
  addressReceiver: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.addressReceiver = this.route.snapshot.paramMap.get('chatId');
  }

}
