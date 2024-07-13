import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Importa RouterModule aquí
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, // Añade RouterModule aquí
    RouterOutlet,
    MatButtonModule,
    MatGridListModule,
    MatRippleModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contenidos-locales';
}