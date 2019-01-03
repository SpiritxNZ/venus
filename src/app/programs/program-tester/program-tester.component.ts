import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-program-tester',
  templateUrl: './program-tester.component.html',
  styleUrls: ['./program-tester.component.css']
})
export class ProgramTesterComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace Home, IT Career training in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Software tester training');

  }

  ngOnInit() {
  }

}
