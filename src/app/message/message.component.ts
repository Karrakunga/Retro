import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message;
  constructor() { }

  ngOnInit() {
  }

  publish() {
    this.message.published = true;
  }

  vote(){
    this.message.votes ++;
  }
}
