import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoomStoreService } from '../room-store.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: string;
  columns: FirebaseListObservable<any>;
  newColumn: string = 'Glad';
  discussMode = false;
  columnClass = 'col-md-12 col-lg-12';
  constructor(private route: ActivatedRoute, private store: RoomStoreService) {

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.room = params['room'];
    });

    this.columns = this.store.getRoom(this.room);
    this.columns.subscribe((values) => { this.getStreamClass(+values.length) });
    this.store.discussMode$.subscribe(next => { this.discussMode = next });
  }

  setDiscussMode() {
    this.store.setDiscussMode();
  }

  addColumn(event) {
    this.columns.push({ title: this.newColumn, messages: [] });
  }



  getStreamClass = function (length: number) {

    switch (length) {
      case 1:
        this.columnClass = 'col-md-12 col-lg-12';
        break;
      case 2:
        this.columnClass = 'col-md-6 col-lg-6';
        break;
      case 3:
        this.columnClass = 'col-md-4 col-lg-4';
        break;
      case 4:
        this.columnClass = 'col-md-3 col-lg-3';
        break;
      case 5:
        this.columnClass = 'col-md-2 col-lg-2';
        break;
      case 6:
        this.columnClass = 'col-md-2 col-lg-2';
        break;
      default:
        this.columnClass = 'col-md-1 col-lg-1';
    }

  };
}
