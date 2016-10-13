import { Component, OnInit, Input } from '@angular/core';
import {RoomStoreService} from '../room-store.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column;
  columnStore;
  messages;
  constructor(private store : RoomStoreService) { 
      
  }

  ngOnInit() {
      this.columnStore = this.store.getColumn(this.column.title);
  }

  addMessage() {
      console.log(this.columnStore);

      if (this.columnStore.messages === undefined){
          this.columnStore.set({messages: []});
      }
      this.columnStore.child("messages").push({text: '', votes: 0, published: false});
  }

}
