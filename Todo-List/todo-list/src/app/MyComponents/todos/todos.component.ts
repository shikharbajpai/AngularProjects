import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Shared/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[] = [
    // { sno: 1, title: "Title 1",desc: "description 1", active: true },
    // { sno: 2, title: "Title 2",desc: "description 2", active: true },
    // { sno: 3, title: "Title 3",desc: "description 3", active: true },
    // { sno: 4, title: "Title 4",desc: "description 4", active: true },

  ];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
