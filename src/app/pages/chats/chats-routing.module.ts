import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chats } from './chats';
import { ChatSpecificPage } from '../chat-specific/chat-specific.page';

const routes: Routes = [
  {
    path: '',
    component: Chats
  },
  {
    path: ':chatId',
    component: ChatSpecificPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}
