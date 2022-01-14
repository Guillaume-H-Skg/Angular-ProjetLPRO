import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TankService } from '../services/tank/tank.service';

import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-tank-modif',
  templateUrl: './tank-modif.component.html',
  styleUrls: ['./tank-modif.component.less']
})
export class TankModifComponent implements OnInit {
  tanks: any = null;
  change: boolean = false;
  form: FormGroup;
  submitted = false;

  constructor(
    private Tank: TankService,
    private route: ActivatedRoute,
    private routeRedirect:Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        acceptTerms: [false, Validators.requiredTrue],
        name: ['', [
          Validators.required,
          Validators.maxLength(30)]
        ],
        country: ['', [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(3)]
        ],
        gun: ['', [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(3)]
        ],
        manufacturer: ['', [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(3)]
        ],
        amount: ['', [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3)]
        ],
        releaseDate: ['', [
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4)]
        ],
        pictureLink: ['',
          Validators.required,
        ],
        role: ['', [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(5)]
        ],
        time: ['', [
          Validators.required,
          Validators.maxLength(4)]
        ],
        history: ['', [
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(50)]
        ],
        available: ['', Validators.required]

      }
    );
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.Tank.get(id).subscribe((value: any) => {
      console.log(value)
      this.tanks = value;
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.Tank.update(this.tanks).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
        this.routeRedirect.navigate(['/tanks']);
      }, 3000);
    })
  }
}

