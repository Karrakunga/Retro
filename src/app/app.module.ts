

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

import { RoomStoreService } from './room-store.service';
import { AuthService } from './auth.service';
import { CanActivateViaAuthGuard} from './CanActivateViaAuthGuard';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { DiscussComponent } from './discuss/discuss.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PublishedPipe } from './published.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyDJqaGhcougzwcmRUs_x5O00SiU9Y43OJA",
  authDomain: "retro-c4024.firebaseapp.com",
  databaseURL: "https://retro-c4024.firebaseio.com",
  storageBucket: "retro-c4024.appspot.com",
  messagingSenderId: "580291218857"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
};



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomComponent,
    MessageComponent,
    MessagesComponent,
    ColumnComponent,
    DiscussComponent,
    HomeComponent,
    RegisterComponent,
    PublishedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [RoomStoreService, CanActivateViaAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
