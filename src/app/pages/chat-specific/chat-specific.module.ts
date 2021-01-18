import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatSpecificPageRoutingModule } from './chat-specific-routing.module';
import { ChatSpecificPage } from './chat-specific.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatSpecificPageRoutingModule
  ],
  declarations: [ChatSpecificPage]
})
export class ChatSpecificPageModule {}
