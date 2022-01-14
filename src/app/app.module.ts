import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TankComponent } from './tank/tank.component';
import { TankService } from './services/tank/tank.service';
import { HomeComponent } from './home/home.component';
import { TankListComponent } from './tank-list/tank-list.component';
import { TankModifComponent } from './tank-modif/tank-modif.component';
import { TankNewComponent } from './tank-new/tank-new.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MuseumComponent } from './museum/museum.component';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumModifComponent } from './museum-modif/museum-modif.component';
import { MuseumNewComponent } from './museum-new/museum-new.component';
import { MuseumService } from './services/museum/museum.service';

@NgModule({
  declarations: [
    AppComponent,
    TankComponent,
    HomeComponent,
    TankListComponent,
    TankModifComponent,
    TankNewComponent,
    MuseumComponent,
    MuseumListComponent,
    MuseumModifComponent,
    MuseumNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [TankService,MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
