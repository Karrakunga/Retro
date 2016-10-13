import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { routing } from './app.routes';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { ColumnComponent } from './column/column.component';

import {RoomStoreService} from './room-store.service';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
 apiKey: "AIzaSyDJqaGhcougzwcmRUs_x5O00SiU9Y43OJA",
    authDomain: "retro-c4024.firebaseapp.com",
    databaseURL: "https://retro-c4024.firebaseio.com",
    storageBucket: "retro-c4024.appspot.com",
    messagingSenderId: "580291218857"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent,
    MessageComponent,
    MessagesComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [RoomStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
