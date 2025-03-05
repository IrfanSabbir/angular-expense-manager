import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../model/todos.type';
import { TodosService } from '../services/todos.service';
import { catchError, finalize } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos = signal<Array<Todos>>([]);
  loading = signal<boolean>(true);

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

}
