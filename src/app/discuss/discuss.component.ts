import { Component, OnInit } from '@angular/core';
import { RoomStoreService } from '../room-store.service';
@Component({
  selector: 'app-discuss',
  templateUrl: './discuss.component.html',
  styleUrls: ['./discuss.component.scss']
})
export class DiscussComponent implements OnInit {
selectedMessages;
  constructor(private store: RoomStoreService) {
    this.selectedMessages = store.selectedMessages;
   }

  ngOnInit() {
  }

}
