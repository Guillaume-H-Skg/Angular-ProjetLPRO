import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Museum } from '../models/museum.model';
import { MuseumService } from '../services/museum/museum.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-museum-new',
  templateUrl: './museum-new.component.html',
  styleUrls: ['./museum-new.component.less']
})
export class MuseumNewComponent implements OnInit {
  public museums!: Museum;


  //angForm: FormGroup;
  form: FormGroup;
  submitted = false;

  constructor(
    private Museum: MuseumService,
    private router: Router,
    private formBuilder: FormBuilder
  ){
    this.form = this.formBuilder.group(
      {
        acceptTerms: [false, Validators.requiredTrue],
        name: ['', [
          Validators.required,
          Validators.maxLength(30)]
        ],
        location: ['', [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(3)]
        ],
        openingDate: ['', [
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(3)]
        ],    
        image: ['',
          Validators.required,
        ],
        description: ['', [
          Validators.required,
          Validators.maxLength(500),
          Validators.minLength(50)]
        ],
      

      }
    );
  }

  ngOnInit(): void {
    this.museums = new Museum();
  }



  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    // console.log(JSON.stringify(this.form.value, null, 2));
    this.Museum.saveNewMuseum(this.museums).subscribe(() => {
      this.museums = new Museum();
      this.router.navigate(['/museums']);
    })
  }

}

