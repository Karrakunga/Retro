import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column;
  constructor() { }

  ngOnInit() {
  }

  addMessage() {
      this.column.messages.push({text: '', votes: 0, published: false});
  }

}
