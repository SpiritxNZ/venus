import { Component, OnInit , Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-program-developer',
  templateUrl: './program-developer.component.html',
  styleUrls: ['./program-developer.component.css']
})

export class ProgramDeveloperComponent implements OnInit {
  isBrowser=false;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Software developer training programme in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Software developer training');
  }

  ngOnInit() {
<<<<<<< HEAD
    if(!this.isBrowser){
      return ;
    }
=======
    // if(!this.isBrowser){
    //   return ;
    // }
>>>>>>> 306519870a8556a13d915e2c3b44724676376e03
  }

}
