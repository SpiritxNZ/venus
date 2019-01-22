import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentlang=" ";
  constructor(
    private meta: Meta,
    private titleService: Title,
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {
    
    // default language is english
    translate.setDefaultLang(this.route.snapshot.paramMap.get('lang'));

    this.meta.addTags([
      { name: 'keywords', content: 'IT training, IT graduates, IT jobs, software developer training, software graduates, web developer training, web dev study, web dev jobs, web developer jobs, web developer graduate, front end graduate'},
      { name: 'description', content: 'Gradspace Home, IT Career training in Auckland.' }
    ])
    this.titleService.setTitle('Gradspace | Home');
   }
   passdata()
   {
     this.currentlang=this.route.snapshot.paramMap.get('lang');
   }
  ngOnInit() {
    this.passdata()
    // console.log(this.route.snapshot.paramMap.get('lang'));
  }
}
  //setInterval("showLogin()","1000");
  //switch(i)
      //{
        //case 0:
        //document.getElementById("blogdiv11").style.display="block";
        //document.getElementById("blogdiv12").style.display="hide";
        //break;
        //case 1:
        //document.getElementById("blogdiv12").style.display="block";
        //document.getElementById("blogdiv11").style.display="hide";
        //break;
      //}


