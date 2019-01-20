import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { LangService } from '../../services/lang.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private data: LangService
  ) {
    // default language is english
    translate.setDefaultLang('aboutus'+this.data.test);
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace About us' }
    ])
    this.titleService.setTitle('Gradspace | About ');
  }
  ngOnInit() {}

}