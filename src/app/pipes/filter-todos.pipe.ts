import { Pipe, PipeTransform } from '@angular/core';
import { Todos } from '../model/todos.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todos[], searchTerm: string): Todos[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });  }

}
