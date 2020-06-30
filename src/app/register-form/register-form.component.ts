import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { DirtyComponent } from '../models/dirty-component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit, DirtyComponent {
  isDirty = false;
  registerform: FormGroup;
  submitted = false;
  pattern1 = '^[0-9_-]{10,12}';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerform = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(this.pattern1),
        ],
      ],
      city: ['', Validators.required],
    });
    this.registerform.valueChanges.subscribe((e) => (this.isDirty = true));
  }

  _keyUp(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.key);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerform.controls;
  }

  registeSubmit() {
    this.submitted = true;
    console.log(this.registerform.value);
    // stop here if form is invalid
    if (this.registerform.invalid) {
      return;
    }

    alert('SUCCESS!! :-)');
  }

  canDeactivate() {
    return this.isDirty;
  }
}
