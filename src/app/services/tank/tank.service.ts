import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { Tank } from 'src/app/models/tank.model'
import { map } from 'rxjs/operators';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class TankService {
  private dbPath = "/tanks";
  tanksRef: AngularFirestoreCollection<Tank>;
  // angForm: FormGroup;
  submitted = false;  
  
  constructor(
    // private fb: FormBuilder,
    private db : AngularFirestore,
  ) { 
    this.tanksRef = db.collection(this.dbPath);
    // this.createForm();
  }

  // createForm(){
  //   this.angForm = this.fb.group({
  //     name: ['', Validators.required ],
  //     address: ['', Validators.required ]
  //     });
  // }

  getAllTanks(): any {
    return this.tanksRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewTank(tank : Tank): any{
    return new Observable(obs=>{
      this.tanksRef.add({...tank}).then(()=>{
        obs.next();
      });
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.tanksRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(tank: Tank) {
    return new Observable(obs => {
      this.tanksRef.doc(tank.id).update(tank);
      obs.next();
    });
  }

  delete(id:any){
    this.db.doc(`tanks/${id}`).delete();
  }

}
