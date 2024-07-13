import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'grid-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  tiles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCsvData();
  }

  loadCsvData() {
    this.http
      .get('../assets/data/contenidos.csv', { responseType: 'text' })
      .pipe(map((data) => this.csvToArray(data)))
      .subscribe((data) => {
        this.tiles = data;
      });
  }

  csvToArray(str: string, delimiter = ',') {
    // Primero, normaliza las líneas para manejar diferentes finales de línea (CRLF vs LF)
    const lines = str.replace(/\r\n/g, '\n').split('\n');

    // Extrae los encabezados de la primera línea
    const headers = lines[0]
      .split(delimiter)
      .map((header) => header.replace(/^"|"$/g, ''));

    // Mapea cada línea a un objeto, teniendo en cuenta las comillas dobles
    const data = lines.slice(1).map((line) => {
      const row = [];
      let match;
      let currentIndex = 0;
      let currentCell = '';
      let inQuotes = false;

      while ((match = line[currentIndex])) {
        if (match === '"') {
          inQuotes = !inQuotes;
        } else if (match === delimiter && !inQuotes) {
          row.push(currentCell);
          currentCell = '';
        } else {
          currentCell += match;
        }
        currentIndex++;
      }

      // Añade la última celda de la fila después de salir del bucle, excluyendo celdas vacias
      if (currentCell.trim() !== '') {
        row.push(currentCell);
      }

      // Convierte la fila en un objeto
      const obj = row.reduce((acc: any, cur, idx) => {
        acc[headers[idx]] = cur.replace(/^"|"$/g, ''); // Elimina las comillas dobles al principio y al final
        return acc;
      }, {});

      return obj;
    });

    // Filtra las filas vacías y devuelve el resultado
    return data.filter((row) => Object.keys(row).length > 0);
  }
}
