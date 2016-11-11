import { Component, Input, OnInit } from '@angular/core';
import { RoomStoreService } from '../room-store.service';
import { AuthService } from '../auth.service';
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
  discussMode = false;
  dropEnabled = true;
  constructor(private store: RoomStoreService, public auth: AuthService) {

  }

  ngOnInit() {
    this.messages = this.store.getMessages(this.room, this.column);
    this.store.discussMode$.subscribe(next => { this.discussMode = next });
  }

merge(){
  this.dropEnabled = false;
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
    this.messages.update(key, { text: event });
  }

  select(key: string) {
    this.store.selectMessage(this.message.text, this.message.votes);
    this.message.selected = true;
  }

  dragOver($event, key) {
    this.messages.update(key, { text: this.message.text + '\n' + $event.dragData.text });
  }

  onDragSucess(key){
     this.messages.remove(key);
  }
}
