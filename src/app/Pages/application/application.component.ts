import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import 'core-js/es7/reflect';
import { ApiService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';

export interface showlist {
  imageurl: string;
  detailtitle: string;
  detail: string;
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  isBrowser=false
  errorMessage: string;
  successMessage: string;
  interests: any[] = [
    {
      "input": "input1",
      "id": "1",
      "backgroundimageurl": "../../../assets/icons/interest1.svg",
      "name": "Software Developer Program",
    },
    {
      "input": "input2",
      "id": "2",
      "backgroundimageurl": "../../../assets/icons/interest2.svg",
      "name": "Software Testing Program"
    },
    {
      "input": "input3",
      "id": "3",
      "backgroundimageurl": "../../../assets/icons/interest3.svg",
      "name": "Business Analyst Program"
    },
    {
      "input": "input4",
      "id": "4",
      "backgroundimageurl": "../../../assets/icons/interest4.svg",
      "name": "getting money"
    },
    {
      "input": "input5",
      "id": "5",
      "backgroundimageurl": "../../../assets/icons/interest5.svg",
      "name": "words are good"
    }, {
      "input": "input6",
      "id": "6",
      "backgroundimageurl": "../../../assets/icons/interest6.svg",
      "name": "take a shot"
    }

  ];
  id = 1;
  myForm: FormGroup;
  divname: any = 1;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private fb: FormBuilder,
    private apiService: ApiService,

  ) {
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace About us' }
    ])
    this.titleService.setTitle('Gradspace | About ');

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    if (!this.isBrowser){
      return;
    }
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

  // returns the full name
  getFullName() {
    return this.myForm.get('firstname') + " " + this.myForm.get('lastname');
  }

  //Submits form data 
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