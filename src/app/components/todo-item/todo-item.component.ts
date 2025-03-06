import { Component, input, output } from '@angular/core';
import { Todos } from '../../model/todos.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  todoItem = input.required<Todos>()

  todoToggled = output<Todos>();

  todoClicked() {
    this.todoToggled.emit(this.todoItem());
  }
}
