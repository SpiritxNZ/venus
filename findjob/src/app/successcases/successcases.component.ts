import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successcases',
  templateUrl: './successcases.component.html',
  styleUrls: ['./successcases.component.css']
})

export class SuccesscasesComponent implements OnInit {
  successfulpeople: any[] = [
    {
      "image":"../../assets/successcasesimage1.jpg",
      "name": "Douglas  Pace",
      "university":"Stanford University",
      "offerlocation":"Nilson",
      "offerposition":"Shanghai SFA Analyst",
      "courses":"Number41",
      "details":"The lawyer for a top Chinese executive who faces fraud charges in the US says it would be inconceivable she would flee because she would not her embarrass her father or the enormous company she has helped build. Monday is the second day of a bail hearing in Canada on whether to release Meng Wanzhou, the chief financial officer of telecommunications giant Huawei and also the daughter of its founder."
    },
    {
      "image":"../../assets/successcasesimage1.jpg",
      "name": "Douglas  Pace",
      "university":"Stanford University",
      "offerlocation":"Nilson",
      "offerposition":"Shanghai SFA Analyst",
      "courses":"Number41",
      "details":"The lawyer for a top Chinese executive who faces fraud charges in the US says it would be inconceivable she would flee because she would not her embarrass her father or the enormous company she has helped build. Monday is the second day of a bail hearing in Canada on whether to release Meng Wanzhou, the chief financial officer of telecommunications giant Huawei and also the daughter of its founder."
    },
    {
      "image":"../../assets/successcasesimage1.jpg",
      "name": "Douglas  Pace",
      "university":"Stanford University",
      "offerlocation":"Nilson",
      "offerposition":"Shanghai SFA Analyst",
      "courses":"Number41",
      "details":"The lawyer for a top Chinese executive who faces fraud charges in the US says it would be inconceivable she would flee because she would not her embarrass her father or the enormous company she has helped build. Monday is the second day of a bail hearing in Canada on whether to release Meng Wanzhou, the chief financial officer of telecommunications giant Huawei and also the daughter of its founder."
    },
    {
      "image":"../../assets/successcasesimage2.jpg",
      "name": "Lily  Tommy",
      "university":"AUT",
      "offerlocation":"USA",
      "offerposition":"IT Technicion",
      "courses":"Number66",
      "details":"Samoan police have provided no information relating to the death of an Auckland man in a Samoan prison cell, an inquest has heard.Coroner Peter Ryan opened the inquest, into the death of 38-year-old Hans Dalton, on Tuesday at the Auckland District Court. He said the only document he had received was a report from the Samoan Ombudsman following an investigation of conditions at the prison."
    },
    {
      "image":"../../assets/successcasesimage2.jpg",
      "name": "Lily  Tommy",
      "university":"AUT",
      "offerlocation":"USA",
      "offerposition":"IT Technicion",
      "courses":"Number66",
      "details":"Samoan police have provided no information relating to the death of an Auckland man in a Samoan prison cell, an inquest has heard.Coroner Peter Ryan opened the inquest, into the death of 38-year-old Hans Dalton, on Tuesday at the Auckland District Court. He said the only document he had received was a report from the Samoan Ombudsman following an investigation of conditions at the prison."
    },
    {
      "image":"../../assets/successcasesimage2.jpg",
      "name": "Lily  Tommy",
      "university":"AUT",
      "offerlocation":"USA",
      "offerposition":"IT Technicion",
      "courses":"Number66",
      "details":"Samoan police have provided no information relating to the death of an Auckland man in a Samoan prison cell, an inquest has heard.Coroner Peter Ryan opened the inquest, into the death of 38-year-old Hans Dalton, on Tuesday at the Auckland District Court. He said the only document he had received was a report from the Samoan Ombudsman following an investigation of conditions at the prison."
    }
  ];
  
  constructor() { }
  ngOnInit() {
  }
}
