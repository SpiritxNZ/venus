import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import 'core-js/es7/reflect';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  errorMessage:string;
  successMessage:string;
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
    private apiService: ApiService
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
        ]],
      });
    }

    // sets the displayed left item on hover
    mouseHoverEnter(a) {
      this.divname = a;
    }

  /**returns the full name */
  getFullName() {
    return this.myForm.get('firstname') + " " + this.myForm.get('lastname');
  }
  /**Submits form data */
  submit() {
    // Check for if Form is dirty and that is valid
    if (this.myForm.dirty && this.myForm.valid) {
      this.myForm.value['name'] = this.getFullName();
      
      this.apiService.addContactData(this.myForm.value).subscribe(
          (res) => { this.successMessage = "Thank you, we'll be in touch shortly." },
          // Return the error message in HTML
          (err) => {
            console.warn(err);
            this.errorMessage = 'Oops, there was an error.'
          });
    }
  }
}