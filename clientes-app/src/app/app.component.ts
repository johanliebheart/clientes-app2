import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a angular';
  curso: string = 'Curso angular 11';
  profesor: string = 'Andréz Guzmán'
}
