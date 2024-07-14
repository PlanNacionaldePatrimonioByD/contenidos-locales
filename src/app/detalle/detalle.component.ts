import { Component, OnInit } from '@angular/core';
import { CsvParserService } from '../csv-parser.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  tiles: any[] = [];
  currentTile: any;
  blobPath: string =
    'https://vamosahacermemoria.blob.core.windows.net/contenidos-locales/';
  token: string =
    'sp=r&st=2024-07-13T20:09:43Z&se=2025-07-14T04:09:43Z&spr=https&sv=2022-11-02&sr=c&sig=MU4sEEY3pLMoomqUyUJV5G9bRxTSg%2BiO8ORq5Lj1ihE%3D';

  constructor(
    private csvParser: CsvParserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Asegúrate de convertir el ID a número si es necesario
      this.loadCsvData(id); // Asume que este método ya existe y carga los datos basados en el ID
    });
  }

  loadCsvData(id: number) {
    this.http
      .get('../assets/data/Contenidos Locales.csv', { responseType: 'text' })
      .pipe(map((data) => this.csvParser.csvToArray(data)))
      .subscribe((data) => {
        this.tiles = data;
        this.currentTile = this.tiles.find((tile) => tile.ID === id.toString());
      });
  }

  navigateToDetail(id: string) {
    this.router.navigate(['/detalle', id]); // Función para navegar
  }
}
