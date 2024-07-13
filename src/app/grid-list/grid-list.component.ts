import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'grid-list',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatGridListModule, MatButtonModule],
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent {
  tiles = [
    {
      text: 'One',
      color: 'lightblue',
      img: 'https://picsum.photos/300/200?random=1',
      subtitle: 'Subtitle One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      text: 'Two',
      color: 'lightgreen',
      img: 'https://picsum.photos/300/200?random=2',
      subtitle: 'Subtitle Two',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      text: 'Three',
      color: 'lightpink',
      img: 'https://picsum.photos/300/200?random=3',
      subtitle: 'Subtitle Three',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      text: 'Four',
      color: '#DDBDF1',
      img: 'https://picsum.photos/300/200?random=4',
      subtitle: 'Subtitle Four',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
}
