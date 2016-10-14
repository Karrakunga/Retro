import { Component, OnInit, Input } from '@angular/core';
import {RoomStoreService} from '../room-store.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column;

  messages;
  constructor(private store : RoomStoreService) { 
      
  }

  ngOnInit() {
      this.messages = this.store.getMessages(this.column.title);
  }

  addMessage() {
      this.messages.push({text: '', votes: 0, published: false});
  }

}
