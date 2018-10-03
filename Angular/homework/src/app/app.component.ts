import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';

  listener(id: number) {
    console.log(`[AppComponent] Removed item: ${id}`);
  }
}
