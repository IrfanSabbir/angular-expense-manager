import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'expense-manager';
}
