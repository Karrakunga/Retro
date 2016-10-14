import { Component, Input, OnInit } from '@angular/core';
import { RoomStoreService } from '../room-store.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message;
  @Input() column;
  @Input() room;
  messages;
  constructor(private store: RoomStoreService) {

  }

  ngOnInit() {
    this.messages = this.store.getMessages(this.room, this.column);
  }

  publish(key: string) {
    this.messages.update(key, { published: true });
    this.message.published = true;
  }

  delete(key: string) {
    this.messages.remove(key);
  }

  vote(key: string) {
    this.messages.update(key, { votes: this.message.votes ? this.message.votes + 1 : this.message.votes = 1 });
  }

  updateMessage(key, event) {
    if (this.message.published) {
      this.messages.update(key, { text: event });
    }
  }
}
