import { Component, Input, OnInit } from '@angular/core';
import { RoomStoreService } from '../room-store.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() messageId;
  @Input() columnId;
  @Input() roomId;
  message;
  discussMode = false;
  dropEnabled = true;
  votes;
  constructor(private store: RoomStoreService, public auth: AuthService) {

  }

  ngOnInit() {
    this.message = this.store.getMessage(this.roomId, this.columnId, this.messageId);
    this.store.discussMode$.subscribe(next => { this.discussMode = next });

    this.message.subscribe(message => this.votes = message.votes);
  }

  merge() {
    this.dropEnabled = false;
  }

  publish() {
    this.message.update({published: true });
   // this.message.published = true;
  }

  delete() {
    this.message.remove();
  }

  vote() {
    console.log(this.message);
    console.log(this.votes);
    this.message.update({ votes: this.votes ? this.votes + 1 : this.votes = 1 });
  }

  updateMessage(event) {
    this.message.update({ text: event });
  }

  select() {
    this.store.selectMessage(this.message.text, this.message.votes);
    this.message.update({ selected: true });
  }

  dragOver($event, key) {
    this.message.update({ text: this.message.text + '\n' + $event.dragData.text });
  }

  onDragSucess(key) {
    this.message.remove();
  }
}
