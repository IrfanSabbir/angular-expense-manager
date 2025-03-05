import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  greetingMessage= signal('Hello ng! ')

  myGreetingKeyHandler (event: Event) {
    this.greetingMessage.set((event.target as HTMLInputElement).value);
    console.log(`Pressed key ${(event.target as HTMLInputElement).value}`)
  }
}
