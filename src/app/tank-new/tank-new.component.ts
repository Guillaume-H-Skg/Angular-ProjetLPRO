import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tank } from '../models/tank.model';
import { TankService } from '../services/tank/tank.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-tank-new',
  templateUrl: './tank-new.component.html',
  styleUrls: ['./tank-new.component.less']
})
export class TankNewComponent implements OnInit {
  public tanks!: Tank;


  //angForm: FormGroup;
  form: FormGroup;
  submitted = false;

  constructor(
    private Tank: TankService,
    private router: Router,
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
    this.tanks = new Tank();
  }



  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.Tank.saveNewTank(this.tanks).subscribe(() => {
      this.tanks = new Tank();
      this.router.navigate(['/tanks']);
    })
  }
}
