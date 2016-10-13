import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class RoomStoreService {
columns: FirebaseListObservable<any>;
  constructor(private af: AngularFire) { 
      this.columns = af.database.list('/items');
  }
  
  getColumn(title){
      return this.af.database.object('/column/' + title);
  }

}
