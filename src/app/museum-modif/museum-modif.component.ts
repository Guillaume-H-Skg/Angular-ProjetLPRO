import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MuseumService } from '../services/museum/museum.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-museum-modif',
  templateUrl: './museum-modif.component.html',
  styleUrls: ['./museum-modif.component.less']
})
export class MuseumModifComponent implements OnInit {
  museums: any = null;
  change: boolean = false;
  form: FormGroup;
  submitted = false;

  constructor(
    private Museum: MuseumService,
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
    const id = this.route.snapshot.params['id'];
    this.Museum.get(id).subscribe((value: any) => {
      console.log(value)
      this.museums = value;
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
    this.Museum.update(this.museums).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
        this.routeRedirect.navigate(['/museums']);
      }, 3000);
    })
  }

}
