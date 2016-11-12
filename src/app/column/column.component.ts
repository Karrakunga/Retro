import { Component, OnInit, Input } from '@angular/core';
import { RoomStoreService } from '../room-store.service';
import { AngularFire } from 'angularfire2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() columnId;
  @Input() roomId;
  column;
  messages;
  constructor(private store: RoomStoreService, private af: AngularFire, private auth: AuthService) {
  }

  ngOnInit() {
    this.column =  this.store.getColumn(this.roomId, this.columnId);
    this.messages = this.store.getMessages(this.roomId, this.columnId);
  }

  addMessage() {
    this.messages.push({ text: '', votes: 0, published: false, uid: this.auth.uid });
  }

  delete() {
    this.store.deleteColumn(this.roomId, this.columnId);
  }

  dragOver($event){

  }
}
