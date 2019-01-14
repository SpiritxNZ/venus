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

  videoPerson1 = {
    name: 'Neo',
    uni: 'ICL Business School',
    job: 'Junior Developer',
    jobLoc: 'Hatch Web & Design',
    description: 'Neo came to us in March 2017 while he was still attending \
    ICL business school in Auckland. In less than 6 months, Neo came from only \
    basic knowledge in HTML and CSS to being able to proficiently use the \
    Angular framework with JavaScript and TypeScript, and able to use the \
    Laravel framework (PHP) as a RESTful API.'
  }
  videoPerson2 = {
    name: 'Bill',
    uni: 'AUT',
    job: 'Junior Developer',
    jobLoc: 'Lancom Technology',
    description: 'Bill came to us in June 2017 after he graduated from AUT. \
    While at Gradspace, Bill learnt and entered the depth of the Angular \
    framework, developed essential leadership skills while leading a team \
    of graduates to complete a major commercial project.'
  }

  successfulpeople: any[] = [
    {
      "image":"../../assets/tutor_images/successcasesimage1.jpg",
      "name": "Irene",
      "university":"University of Auckland",
      "offerlocation":"Magiq Software",
      "offerposition":"Junior Developer",
      "courses":"Software Developer Programme",
      "details":"Gradspace helped me to improve my technical skills and \
      lots of smart tips on how to make myself more employable. You also \
      get lots of chances to work on real live projects with experienced \
      developers in the programme. It's no surprise that you’ll gain heaps \
      of practical experience from the programme that you don’t get from \
      the university. Thanks Gradspace for providing this fantastic \
      program for IT graduates. "
    }
  ];
  
  constructor(private sanitizer: DomSanitizer) { 
    this.video1 = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Nbpl_8ijhUo");
    this.video2 = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qw2b4HEgoeA");
  }
  ngOnInit() {
  }
}
