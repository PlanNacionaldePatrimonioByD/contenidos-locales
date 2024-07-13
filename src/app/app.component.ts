import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Usar templateUrl ya que tienes un archivo HTML separado
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatButtonModule,
    MatGridListModule,
    MatRippleModule,
    GridListComponent,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class AppComponent {
  title = 'contenidos-locales';
}
