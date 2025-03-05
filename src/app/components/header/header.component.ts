import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mainPage = {title: 'Angular expense monitor', path: '/'};
  todoPage = {title: 'Todos', path: '/todos'};
}
