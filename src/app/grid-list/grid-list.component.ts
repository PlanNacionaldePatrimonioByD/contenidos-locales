import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CsvParserService } from '../csv-parser.service';

@Component({
  selector: 'grid-list',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  tiles: any[] = [];
  blobPath: string =
    'https://vamosahacermemoria.blob.core.windows.net/contenidos-locales/';
  token: string =
    'sp=r&st=2024-07-13T20:09:43Z&se=2025-07-14T04:09:43Z&spr=https&sv=2022-11-02&sr=c&sig=MU4sEEY3pLMoomqUyUJV5G9bRxTSg%2BiO8ORq5Lj1ihE%3D';

  constructor(private http: HttpClient, private csvParser: CsvParserService) {}

  ngOnInit(): void {
    this.loadCsvData();
  }

  loadCsvData() {
    this.http
      .get('../assets/data/Contenidos Locales.csv', { responseType: 'text' })
      .pipe(map((data) => this.csvParser.csvToArray(data)))
      .subscribe((data) => {
        this.tiles = data;
      });
  }
}
