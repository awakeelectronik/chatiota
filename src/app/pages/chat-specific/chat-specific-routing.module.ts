import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatSpecificPage } from './chat-specific.page';

const routes: Routes = [
  {
    path: '',
    component: ChatSpecificPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSpecificPageRoutingModule {}
