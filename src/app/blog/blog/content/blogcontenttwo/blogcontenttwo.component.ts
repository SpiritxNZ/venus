import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-blogcontenttwo',
  templateUrl: './blogcontenttwo.component.html',
  styleUrls: ['./blogcontenttwo.component.css']
})
export class BlogcontenttwoComponent implements OnInit {
  isBrowser=false;
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('blog-gradspace-intro-'+this.route.snapshot.paramMap.get('lang'));
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace Blog introduction' }
    ])
    this.titleService.setTitle('新西兰学IT找不到工作？原来是这个原因');

  }

  ngOnInit() {
    // if(!this.isBrowser){
    //   return ;
    // }
  }

}