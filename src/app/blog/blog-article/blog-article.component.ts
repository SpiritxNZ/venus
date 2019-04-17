import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {
  articleId:number
  articleData:any;
  colors:string;
  blogs ={
    seminar_aut_1:{
    link:"seminar_aut_1",
    image:"../../../../../assets/blog_images/auckland.jpg",
    subtitle:'2019 新西兰IT毕业生 就业讲座',
    description:'伴随着2019的脚步，新的一年开学季马上就要到了；与此同时，也意味着又有许多刚毕业的留学生告别校园，加入求职大军中。',
    publishTime:'Published 24 Jan 2019',
    content: ''
    },
    gradspace_intro_1:{
    link:'gradspace_intro_1',
    image:'../../../../../assets/blog_images/whybloglist.jpg',
    subtitle:'新西兰学IT找不到工作？原来是这个原因......',
    description:'相当多的留学生从IT专业毕业后，却发现不要说企业的offer拿不到，连面试机会都没有！学IT的学生，花上一年时间也找不到工作的人并不少见。',
    publishTime:'Published 16 Jan 2019',
    content: ''
    },
    seminar_massey_1:{
    link:'seminar_massey_1',
    image:'../../../../../assets/blog_images/masseyUni.jpg',
    subtitle:'IT 大学毕业生就业免费讲座 - 梅西大学4月10日',
    description:'本次讲座应梅西大学华人学生会邀请，于2019年4月10日晚6点在梅西大学SNW100 举行。 针对于大学IT类 学生，毕业生 提供就业讲座。  我们将在讲座中，向您道出新西兰IT行业招聘的一些内幕，分析很多毕业生找不到工作的原因，给广大毕业生们指明方向并提出一些建议避免走弯路。相信那些有志于在新西兰IT行业闯出一片天的毕业生们不会错过。',
    publishTime:' Published 08/04/2019',
    content: ''
    },
  }

  constructor(
    private route:ActivatedRoute,
    private translate: TranslateService

  ) {
    // Consoles all blogs
    console.log(this.blogs)
    
    // Sets translator
    translate.setDefaultLang('blog'+this.route.snapshot.paramMap.get('lang'));

    // Get article ID from Router
    this.articleId = this.route.snapshot.params['id'];
    this.colors='red'
  }

  ngOnInit() {
    // Get the article data
    this.articleData = this.blogs[this.articleId]
    console.log(this.articleData)
  }

}