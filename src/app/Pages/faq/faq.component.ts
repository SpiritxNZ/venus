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
    },
    {
      question: 'Big long question is very long and long and long and probably going to be too long?',
      answer: 'Long question has a long, long answer. Something something lorem ipsum; this is a long answer as you can see. This is also a tautology but whatever.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
