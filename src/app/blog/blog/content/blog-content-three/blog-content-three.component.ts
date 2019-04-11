import { Component, OnInit, Inject, PLATFORM_ID  } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-content-three',
  templateUrl: './blog-content-three.component.html',
  styleUrls: ['./blog-content-three.component.css']
})
export class BlogContentThreeComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private meta: Meta,
    private titleService: Title,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('blog-nz-it-job-seminar-'+this.route.snapshot.paramMap.get('lang'));
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace NZ IT career seminar'},
      { property: 'og:image', content: 'http://gradspace.org/assets/blog_images/auckland.jpg' },
      { property: 'og:type', content: 'article'},
      { property: "og:url", content: "http://gradspace.org/en/blog-nz-it-job-seminar"},
      { property: 'og:description', content: '4月10号 星期3，向您道出新西兰IT行业招聘的一些内幕，分析很多毕业生找不到工作的原因，给广大毕业生们指明方向并提出一些建议避免走弯路。相信那些有志于在新西兰IT行业闯出一片天的毕业生们不会错过。'}
    ])
    this.titleService.setTitle('梅西大学 IT 就业免费讲座');

  }

  ngOnInit() {
  }

}
