import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-successcases',
  templateUrl: './success-cases.component.html',
  styleUrls: ['./success-cases.component.css']
})

export class SuccesscasesComponent implements OnInit {
  video1:any;
  video2:any;
  video3:any;
cnoren:string;
videoPersons: any[] = [
  {
    video: 'https://www.youtube.com/embed/Nbpl_8ijhUo',
    name: 'Neo',
    uni: 'ICL Business School',
    job: 'Junior Developer',
    jobLoc: 'Hatch Web & Design',
    description: `Neo came to us in March 2017 while he was still attending 
    ICL business school in Auckland. In less than 6 months, Neo came from only 
    basic knowledge in HTML and CSS to being able to proficiently use the 
    Angular framework with JavaScript and TypeScript, and able to use the 
    Laravel framework (PHP) as a RESTful API.`
  },
  {
    video: 'https://www.youtube.com/embed/qw2b4HEgoeA',
    name: 'Bill',
    uni: 'AUT',
    job: 'Junior Developer',
    jobLoc: 'Lancom Technology',
    description: `Bill came to us in June 2017 after he graduated from AUT. 
    While at Gradspace, Bill learnt and entered the depth of the Angular 
    framework, developed essential leadership skills while leading a team 
    of graduates to complete a major commercial project.`
  },
  {
    video: 'https://www.youtube.com/embed/EYd_USvuDdI',
    name: 'Pirlo',
    uni: 'AUT',
    job: 'Intermediate Developer',
    jobLoc: 'Parkable',
    description: `Pirlo came to us in July 2017. While at Gradspace, 
    Pirlo learnt the Angular framework, NodeJS and used them to create a commercial web based chatting application.`
  }
];

  successfulpeople: any[] = [
    {
      "image":"../../assets/tutor_images/successcasesmark.jpg",
      "name": "Mark",
      "university":"University of Auckland",
      "offerlocation":"Sands Software",
      "offerposition":"Junior Developer",
      "courses":"Software Developer Programme",
      "details":`During my time at Gradspace, I learned not only the tech skills such as Angular, Javascript, 
      CSS and Node.js but also soft skills like communication skills, 
      time management skills, teamwork and problem-solving skills. Those soft skills are which you can’t get from the university. 
      It helps me a lot to improve both my tech skills and soft skills til finally, I get a job from Macau as an IT developer. 
      Highly recommend someone who graduated from university but doesn’t have many working experiences. `
    }
  ];
  
  constructor(
    private translate: TranslateService,
    private router:Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { 
    this.translatePage();
  }

  translatePage(){
    this.videoPersons.forEach(person => {
      this.translate.setDefaultLang('success-cases-'+this.route.snapshot.paramMap.get('lang'));
      person.video = this.sanitizer.bypassSecurityTrustResourceUrl(person.video);
    });
  }

  ngOnInit() {
  }
}
