import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  questions: any[] = [
    {
      question: 'Who is the best character in PMMM?',
      answer: 'Kyubey.'
    },
    {
      question: 'Why did Cleopatra fall to despair?',
      answer: 'Kyubey.'
    },
    {
      question: 'What is a famous restaurant in Japan?',
      answer: 'Kyubey.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
