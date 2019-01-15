import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-successcases',
  templateUrl: './successcases.component.html',
  styleUrls: ['./successcases.component.css']
})

export class SuccesscasesComponent implements OnInit {
  video1:any;
  video2:any;
  video3:any;

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
      "image":"../../assets/tutor_images/successcasesirene.jpg",
      "name": "Irene",
      "university":"University of Auckland",
      "offerlocation":"Magiq Software",
      "offerposition":"Junior Developer",
      "courses":"Software Developer Programme",
      "details":`Gradspace helped me to improve my technical skills and 
      lots of smart tips on how to make myself more employable. You also 
      get lots of chances to work on real live projects with experienced 
      developers in the programme. It's no surprise that you’ll gain heaps 
      of practical experience from the programme that you don’t get from 
      the university. Thanks Gradspace for providing this fantastic 
      program for IT graduates.`
    }
  ];
  
  constructor(private sanitizer: DomSanitizer) { 
    this.videoPersons.forEach(person => {
      person.video = sanitizer.bypassSecurityTrustResourceUrl(person.video);
    });
  }
  ngOnInit() {
  }
}
