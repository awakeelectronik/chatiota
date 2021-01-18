import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsRoutingModule } from './chats-routing.module';

import { ChatSpecificPageModule } from '../chat-specific/chat-specific.module';

import { Chats } from './chats';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsRoutingModule,
    ChatSpecificPageModule
  ],
  declarations: [Chats]
})
export class ChatsModule {}
