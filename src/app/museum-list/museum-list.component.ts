import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../services/museum/museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.less']
})
export class MuseumListComponent implements OnInit {

  museums!: any;
  constructor(
    private Museum : MuseumService
  ) { }

  ngOnInit(): void {
    this.Museum.getAllMuseums().subscribe((data: any) => {
      this.museums = data;
    });
  }
}

