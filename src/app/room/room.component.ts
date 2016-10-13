import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {RoomStoreService} from '../room-store.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: string;
//  columns: any[] = [{title: 'Mad', messages: [{text: 'Network !!!', votes: 2, published: false},
//                      {text: 'Car packing is terrible !', votes: 4, published: false}]}, {title: 'Sad', messages: []} ];
 
 columns: FirebaseListObservable<any>;
  newColumn: string = 'Glad';
  constructor(private route: ActivatedRoute, store: RoomStoreService) { 
      this.columns = store.columns;
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.room = params['room'];
    });
  }

  addColumn(event) {
    this.columns.push({title: this.newColumn, messages: []});
  }

  getStreamClass = function () {
    switch (this.columns.length) {
      case 1:
        return 'col-md-12 col-lg-12';
      case 2:
        return 'col-md-6 col-lg-6';
      case 3:
        return 'col-md-4 col-lg-4';
      case 4:
        return 'col-md-3 col-lg-3';
      case 5:
        return 'col-md-2 col-lg-2';
      case 6:
        return 'col-md-2 col-lg-2';
      default:
        return 'col-md-1 col-lg-1';
    }

  };
}
