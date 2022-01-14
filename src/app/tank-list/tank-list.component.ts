import { Component, OnInit } from '@angular/core';
import { TankService } from '../services/tank/tank.service';

@Component({
  selector: 'app-tank-list',
  templateUrl: './tank-list.component.html',
  styleUrls: ['./tank-list.component.less']
})
export class TankListComponent implements OnInit {
  tanks!: any;
  constructor(
    private Tank: TankService
  ) { }

  ngOnInit(): void {
    this.Tank.getAllTanks().subscribe((data: any) => {
      this.tanks = data;
    });
  }
}
