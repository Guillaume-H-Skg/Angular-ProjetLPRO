import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TankListComponent } from './tank-list/tank-list.component';
import { TankModifComponent } from './tank-modif/tank-modif.component';
import { TankNewComponent } from './tank-new/tank-new.component';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumNewComponent } from './museum-new/museum-new.component';
import { MuseumModifComponent } from './museum-modif/museum-modif.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'tanks',
    component: TankListComponent
  },
  {
    path:'new',
    component: TankNewComponent
  },
  {
    path:'modif/:id',
    component: TankModifComponent
  },
  {
    path:'museums',
    component: MuseumListComponent
  },
  {
    path:'newMuseum',
    component: MuseumNewComponent
  },
  {
    path:'modifMuseum/:id',
    component: MuseumModifComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
