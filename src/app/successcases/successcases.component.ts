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
      "university":"",
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
    },
    {
      "image":"../../assets/tutor_images/successcasesimage1.jpg",
      "name": "Douglas  Pace",
      "university":"Stanford University",
      "offerlocation":"Nilson",
      "offerposition":"Shanghai SFA Analyst",
      "courses":"Number41",
      "details":"The lawyer for a top Chinese executive who faces fraud charges in the US says it would be inconceivable she would flee because she would not her embarrass her father or the enormous company she has helped build. Monday is the second day of a bail hearing in Canada on whether to release Meng Wanzhou, the chief financial officer of telecommunications giant Huawei and also the daughter of its founder."
    },
    {
      "image":"../../assets/tutor_images/successcasesimage1.jpg",
      "name": "Douglas  Pace",
      "university":"Stanford University",
      "offerlocation":"Nilson",
      "offerposition":"Shanghai SFA Analyst",
      "courses":"Number41",
      "details":"The lawyer for a top Chinese executive who faces fraud charges in the US says it would be inconceivable she would flee because she would not her embarrass her father or the enormous company she has helped build. Monday is the second day of a bail hearing in Canada on whether to release Meng Wanzhou, the chief financial officer of telecommunications giant Huawei and also the daughter of its founder."
    },
    {
      "image":"../../assets/tutor_images/successcasesimage2.jpg",
      "name": "Lily  Tommy",
      "university":"AUT",
      "offerlocation":"USA",
      "offerposition":"IT Technicion",
      "courses":"Number66",
      "details":"Samoan police have provided no information relating to the death of an Auckland man in a Samoan prison cell, an inquest has heard.Coroner Peter Ryan opened the inquest, into the death of 38-year-old Hans Dalton, on Tuesday at the Auckland District Court. He said the only document he had received was a report from the Samoan Ombudsman following an investigation of conditions at the prison."
    },
    {
      "image":"../../assets/tutor_images/successcasesimage2.jpg",
      "name": "Lily  Tommy",
      "university":"AUT",
      "offerlocation":"USA",
      "offerposition":"IT Technicion",
      "courses":"Number66",
      "details":"Samoan police have provided no information relating to the death of an Auckland man in a Samoan prison cell, an inquest has heard.Coroner Peter Ryan opened the inquest, into the death of 38-year-old Hans Dalton, on Tuesday at the Auckland District Court. He said the only document he had received was a report from the Samoan Ombudsman following an investigation of conditions at the prison."
    },
    {
      "image":"../../assets/tutor_images/successcasesimage2.jpg",
      "name": "Lily  Tommy",
      "university":"AUT",
      "offerlocation":"USA",
      "offerposition":"IT Technicion",
      "courses":"Number66",
      "details":"Samoan police have provided no information relating to the death of an Auckland man in a Samoan prison cell, an inquest has heard.Coroner Peter Ryan opened the inquest, into the death of 38-year-old Hans Dalton, on Tuesday at the Auckland District Court. He said the only document he had received was a report from the Samoan Ombudsman following an investigation of conditions at the prison."
    }
  ];
  
  constructor(private sanitizer: DomSanitizer) { 
    this.video1 = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Nbpl_8ijhUo");
    this.video2 = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/qw2b4HEgoeA");
  }
  ngOnInit() {
  }
}
