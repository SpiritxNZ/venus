import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import 'core-js/es7/reflect';
import { ApiService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  
  isBrowser = false
  errorMessage: string;
  successMessage: string;
  myForm: FormGroup;
  divname: any = 1;

  interests: any[] = [
    {
      "input": "input1",
      "id": "1",
      "backgroundimageurl": "../../../assets/icons/Software develop.png",
      "name": "Software Developer Program",
    },
    {
      "input": "input2",
      "id": "2",
      "backgroundimageurl": "../../../assets/icons/Software Test.png",
      "name": "Software Testing Program"
    },
    {
      "input": "input3",
      "id": "3",
      "backgroundimageurl": "../../../assets/icons/Business Analyst.png",
      "name": "Business Analyst Program"
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private translate: TranslateService,
    private route: ActivatedRoute

  ) {
    translate.setDefaultLang('application-'+this.route.snapshot.paramMap.get('lang'));
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate' },
      { name: 'description', content: 'Gradspace About us' }
    ])
    this.titleService.setTitle('Gradspace | About ');

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    this.myForm = this.formBuilder.group({
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
      email: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.email
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
    return this.myForm.get('firstname').value + " " + this.myForm.get('lastname').value;
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