import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { RoomStoreService } from './room-store.service';
@Injectable()
export class AuthService {
  redirectUrl: string;
  uid: string;
  constructor(private af: AngularFire, private store: RoomStoreService) {
    this.af.auth.subscribe(user => {
            if (user) {
                this.uid = user.uid;
            } else {
                 this.uid = null;
            }
        });
   }


  createUser(email: string, password: string, name: string) {
    return this.af.auth.createUser({
      email: email,
      password: password,
    }).then((user) => {
      this.uid = user.uid;
      return this.store.setUser(name, user.uid);
    });
  }

  signIn(email: string, password: string){
    return this.af.auth.login({
      email: email,
      password: password,
    })
    .then((user) => {
      this.uid = user.uid;
    });
  }
}
