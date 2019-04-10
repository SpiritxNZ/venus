import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
blogs:object=[
{
link:"blog-nz-it-job-seminar",
image:"../../../../../assets/blog_images/auckland.jpg",
subtitle:'2019 新西兰IT毕业生 就业讲座',
description:'伴随着2019的脚步，新的一年开学季马上就要到了；与此同时，也意味着又有许多刚毕业的留学生告别校园，加入求职大军中。',
publishTime:'Published 24 Jan 2019'
},
{
link:'blog-gradspace-intro',
image:'../../../../../assets/blog_images/whybloglist.jpg',
subtitle:'新西兰学IT找不到工作？原来是这个原因......',
description:'相当多的留学生从IT专业毕业后，却发现不要说企业的offer拿不到，连面试机会都没有！学IT的学生，花上一年时间也找不到工作的人并不少见。',
publishTime:'Published 16 Jan 2019'
},
{
image:'../../../../../assets/blog_images/masseyUni.jpg',
subtitle:'IT 大学毕业生就业免费讲座 - 梅西大学4月10日',
description:'本次讲座应梅西大学华人学生会邀请，于2019年4月10日晚6点在梅西大学SNW100 举行。 针对于大学IT类 学生，毕业生 提供就业讲座。  我们将在讲座中，向您道出新西兰IT行业招聘的一些内幕，分析很多毕业生找不到工作的原因，给广大毕业生们指明方向并提出一些建议避免走弯路。相信那些有志于在新西兰IT行业闯出一片天的毕业生们不会错过。',
publishTime:' Published 08/04/2019'
},

]
  currentlang=" ";

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private apiService: ApiService,
    private titleService: Title,
    private meta: Meta,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate' },
      { name: 'description', content: 'Gradspace Blog' }
    ])
    this.titleService.setTitle('Gradspace | Blogs');
    // this.apiGetBlogs();

   }

   passdata()
   {
     this.currentlang=this.route.snapshot.paramMap.get('lang');
   }

   // Get all blogs from Api
  //  apiGetBlogs(){
  //   this.apiService.getAllBlogs().subscribe(
  //     (res)=>{console.log(res), this.blogs=res},
  //     (err)=>{console.warn(err)}
  //   )
  //  }

  ngOnInit() {
  this.passdata();
  }

}