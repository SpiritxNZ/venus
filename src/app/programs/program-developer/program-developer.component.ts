import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-program-developer',
  templateUrl: './program-developer.component.html',
  styleUrls: ['./program-developer.component.css']
})
export class ProgramDeveloperComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Software developer training programme in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Software developer training');

  }

  ngOnInit() {
  }

}
