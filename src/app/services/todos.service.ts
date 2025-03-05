import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todos } from '../model/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http= inject(HttpClient);

  getTodosFromApi(){
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todos>>(url);
  }

}
