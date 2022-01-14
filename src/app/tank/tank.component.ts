import { Component, OnInit, Input } from '@angular/core';
import { TankService }  from '../services/tank/tank.service';


@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.less']
})
export class TankComponent implements OnInit {
  @Input() tankName?: string;
  @Input() tankAvailable?: boolean;
  @Input() tankImage?: string;
  @Input() tankCountry?: string;
  @Input() tankGun?: string;
  @Input() tankManufacturer?: string;
  @Input() tankAmount?: string;
  @Input() tankReleaseDate?: string;
  @Input() tankRole?: string;
  @Input() tankHistory?: string;
  @Input() tankTime?: string;
  @Input() id?: string ;

 

  constructor(
    private Tank: TankService,
    ) { }
    

  ngOnInit(): void {
  }

  suppr():void {
    
    this.Tank.delete(this.id);
  }

  

}
