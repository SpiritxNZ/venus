import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import 'core-js/es7/reflect';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  interests: any[] = [
    {
      "input":"input1",
      "id": "1",
      "backgroundimageurl":"../../../assets/interest1.svg"
    },
    {
      "input":"input2",
      "id": "2",
      "backgroundimageurl":"../../../assets/interest2.svg"
    },
    {
      "input":"input3",
      "id": "3",
      "backgroundimageurl":"../../../assets/interest3.svg"
    },
    {
      "input":"input4",
      "id": "4",
      "backgroundimageurl":"../../../assets/interest4.svg"
    },
    {
      "input":"input5",
      "id": "5",
      "backgroundimageurl":"../../../assets/interest5.svg"
    },    {
      "input":"input6",
      "id": "6",
      "backgroundimageurl":"../../../assets/interest6.svg"
    }
    
  ];
  id=1;
  myForm: FormGroup;
  divname: any= 1;
  
  constructor(
    private fb: FormBuilder,
    // private http: HttpClient
    ) { }

    ngOnInit() {
      this.myForm = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.email
        ]],
        firstname: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]],
        lastname: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]],
        phone: ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern('[0-9]*')
        ]],
        message: ['', [
          Validators.required
        ]]
      });
    }
    enter(a)
    {
      this.divname=a;
    }

    get email() {
      return this.myForm.get('email');
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
    get message() {
      return this.myForm.get('message');
    }

    /**returns the full name */
    getFullName() {
      return this.firstname.value + " " + this.lastname.value;
    }
    /**gets form input and returns object */
    getDataObject() {
      let data = {
        name: this.getFullName(),
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value
      }
      return data;
    }
    /**Submits form data */
    submit() {
      let data = this.getDataObject();
      console.log(data);
      // this.http.post('http://proprius.co.nz/testing/public/contacts', data);
    }
}