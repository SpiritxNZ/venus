import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import 'core-js/es7/reflect';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {

  myForm: FormGroup;

  ids: any[] = [
    {
      "id": "interest1"
    },
    {
      "id": "interest2"
    },
    {
      "id": "interest3"
    },
    {
      "id": "interest4"
    },
    {
      "id": "interest5"
    },
    {
      "id": "interest6"
    }
  ];
  constructor(
    private fb: FormBuilder
    ) {}

    ngOnInit() {
      this.myForm = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        firstname: ['', [
          Validators.required
        ]],
        lastname: ['', [
          Validators.required
        ]],
        phone: ['', [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15)
        ]]
      });
    }
  
    get email() {
      return this.myForm.get('email');
    }
  
    get password() {
      return this.myForm.get('password');
    }
  
    get firstname() {
      return this.myForm.get('firstname');
    }
    get lastname() {
      return this.myForm.get('lastname');
    }
    get phone() {
      return this.myForm.get('phone');
    }
  
  
}


