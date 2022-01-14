import { Component, OnInit, Input } from '@angular/core';
import { MuseumService }  from '../services/museum/museum.service';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.less']
})
export class MuseumComponent implements OnInit {
  @Input() id?: string ;
  @Input() museumName?: string;
  @Input() museumLocation?: string;
  @Input() museumOpeningDate?: string;
  @Input() museumDescription?: string;
  @Input() museumImage?: string;
 
  constructor(
    private Museum: MuseumService,
    ) { }
    

  ngOnInit(): void {
  }

  suppr():void {
    
    this.Museum.delete(this.id);
  }
}
