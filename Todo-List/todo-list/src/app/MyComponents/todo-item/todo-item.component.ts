import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Shared/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem
  @Input() i: number
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todoItem: Todo) {
    console.log("On click has triggered");
    this.todoDelete.emit(todoItem);
  }

  onCheckBoxClick(todoItem) {
    console.log(todoItem);
    this.todoCheckBox.emit(todoItem);
  }
}
