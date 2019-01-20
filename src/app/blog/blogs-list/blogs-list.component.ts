import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {
  blogs:any;


  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private apiService: ApiService,
    private titleService: Title,
    private meta: Meta,

  ) {
    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate' },
      { name: 'description', content: 'Gradspace Blog' }
    ])
    this.titleService.setTitle('Gradspace | Blogs');
    this.apiGetBlogs();

   }



   // Get all blogs from Api
   apiGetBlogs(){
    this.apiService.getAllBlogs().subscribe(
      (res)=>{console.log(res), this.blogs=res},
      (err)=>{console.warn(err)}
    )
   }

  ngOnInit() {

  }

}