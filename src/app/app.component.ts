import { Component } from '@angular/core';

import { TimeAppComponent } from './time-app/time-app.component';

@Component({
  selector: 'app-root',
  imports: [TimeAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'time-api';
}
