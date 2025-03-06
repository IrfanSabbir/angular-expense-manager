import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../model/todos.type';
import { TodosService } from '../services/todos.service';
import { catchError, finalize } from 'rxjs';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [TodoItemComponent, FilterTodosPipe, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos = signal<Array<Todos>>([]);
  loading = signal<boolean>(true);
  searchTerm = signal('');

  todosService =  inject(TodosService);
  ngOnInit(): void {
    this.todosService.getTodosFromApi()
      .pipe(
        catchError(error => {
          console.log(error)
          throw error
        }),
        finalize(() => this.loading.set(false))
      )
      .subscribe((todos) => {
        this.todos.set(todos)
        this.loading.set(false)
      })
  }
  updateTodoItem(todoItem: Todos) {
    this.todos.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    })
  }
}
