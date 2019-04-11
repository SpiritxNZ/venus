import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:any
  blogId:string;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private apiService: ApiService,
    private titleService: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('blog'+this.route.snapshot.paramMap.get('lang'));
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate' },
      { name: 'description', content: 'Gradspace Blog' }
    ])

    this.blogId = this.route.snapshot.params.id


    // this.apiGetBlog(this.blogId);
   }

   // Get all blogs from Api
  //  apiGetBlog(blogId){
  //   this.apiService.getBlog(blogId).subscribe(
  //     (res)=>{console.log(res), this.blog=res, this.setPageTitle(this.blog.blog.post_title)},
  //     (err)=>{console.warn(err)}
  //   )
  //  }

   setPageTitle(blogTitle){
    this.titleService.setTitle('Gradspace | '+blogTitle);
   }


  ngOnInit() {
  }
}