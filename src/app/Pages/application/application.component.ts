import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import 'core-js/es7/reflect';

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
  shows: showlist[] = [
    { imageurl: "url('../../../assets/interest3large.svg')",detailtitle:"University Admission Support", detail: 'Tap into an expert network of strategists, tutors and mentors who will guide you on best-fit universities and advise you on how to stand out as a top applicant. Typically, support will include: <br><br> Tailored team of tutors and mentors matched to your interests and goals <br><br>Personalised roadmap of milestones including key test dates and application tasks to tick off <br><br>Subject tutoring, standardised test support and application essay review <br><br>Extracurricular and Leadership advising that helps you stand out from the crowd <br><br>Strategic university application guidance, including financial aid and scholarship requests', },
    { imageurl: "url('../../../assets/interest1large.svg')",detailtitle:"Curriculum Tutoring", detail: 'No matter where in the world you are, we can connect you to an expert tutor to support you with local and/or international curriculums.<br><br>World-class tutoring designed to meet your needs.<br><br>Dedicated expert mentors and tutors matched to your curriculum, classes and learning requirements<br><br>Personalised and detailed learning plans to measure and ensure success<br><br>Learn at a time and place that suits you by scheduling appointments and taking video lessons with the Crimson App.', },
    { imageurl: "url('../../../assets/interest2large.svg')", detailtitle:"Standardised Tests Support",detail: 'Get the grades you need by connecting with the world’s best tutors in the SAT, ACT, GAMSAT, UMAT, GMAT, GRE tests and more.<br><br>Learn how to ace college admissions tests from tutors who’ve walked the path before you!<br><br>Understand the complexities and requirements of each test and what assessors look for<br><br>Uncover your strengths and weaknesses through practice exams to maximise improvement<br><br>Ensure results with customisable schedules and goals via the Crimson app<br><br>Reach out today to see how we can help you shine in your standardised tests.', },
    { imageurl: "url('../../../assets/interest4large.svg')",detailtitle:"Med School Admission Support", detail: 'Individualised tutoring, interactive workshops and adaptive question banks developed by doctors, medical students and academic staff to help you get into med school within Australasia.<br><br>Understand the complexities and requirements of admissions tests, including the UCAT and GAMSAT<br><br>Prepare for your admission interview with hundreds of practice questions and a simulated mock MMI<br><br>Give yourself the edge, by strategically selecting your extracurricular activities with a mentor who will guide you in becoming a well-rounded applicant<br><br>Gain exclusive, first-hand experience shadowing a doctor at work', },
    { imageurl: "url('../../../assets/interest5large.svg')",detailtitle:"Athletic Scholarship Support", detail: 'With the support of Crimson’s expert sports and academic consultants, you can improve your academic results, get scouted and secure a sports scholarship to a US college. Crimson Athletic support will help you:<br><br>Lift your GPA and test scores to improve your chance of getting scouted<br><br>Get in contact with coaches via our Crimson network<br><br>Shine a light on your athletic ability with a high quality recruitment video<br><br>Gain expert insight into available scholarships with guidance from experienced athletic consultants<br><br>Secure advice on how to fill in the prerequisite recruitment questionnaires', },
    { imageurl: "url('../../../assets/interest6large.svg')",detailtitle:"International Experiences", detail: 'Crimson’s unique tour experiences, where students visit places such as Harvard University, Facebook, NASA and the General Assembly, will accelerate your personal growth and inspire you to reach your greatest potential.<br><br>Connect with industry experts and learn from their achievements<br><br>Go behind the scenes of global companies and organisations<br><br>Explore campuses of world-class and prestigious universities<br><br>Travel with like-minded students and create lifelong connections<br><br>Immerse yourself in diverse cultures and broaden your horizons', }
  ];

  showdetail(a) {
      document.getElementById("sectionimage1").style.backgroundImage=this.shows[a].imageurl;
      document.getElementById("detailtitle").innerHTML =this.shows[a].detailtitle;
      document.getElementById("detail").innerHTML =this.shows[a].detail;
  }

  interests: any[] = [
    {
      "input":"input1",
      "id": "0",
      "backgroundimageurl":"../../../assets/interest1.svg"
    },
    {
      "input":"input2",
      "id": "1",
      "backgroundimageurl":"../../../assets/interest2.svg"
    },
    {
      "input":"input3",
      "id": "2",
      "backgroundimageurl":"../../../assets/interest3.svg"
    },
    {
      "input":"input4",
      "id": "3",
      "backgroundimageurl":"../../../assets/interest4.svg"
    },
    {
      "input":"input5",
      "id": "4",
      "backgroundimageurl":"../../../assets/interest5.svg"
    },    {
      "input":"input6",
      "id": "5",
      "backgroundimageurl":"../../../assets/interest6.svg"
    }
    
  ];
  id=1;
  myForm: FormGroup;
  divname: any= 1;
  
  constructor(
    private fb: FormBuilder
    ) {}

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
        ]]
      });
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
    submit() {
      console.log(this.email.value);
      console.log(this.firstname.value);
      console.log(this.lastname.value);
      console.log(this.phone.value);
    }
}


