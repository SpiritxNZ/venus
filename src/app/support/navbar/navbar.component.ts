import { Component, OnInit, ElementRef, Inject, PLATFORM_ID,EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import * as $ from 'jquery';
import {TranslateService} from '@ngx-translate/core';
import { Router, Route } from '@angular/router';
import { ActivatedRoute,NavigationStart,NavigationEnd  } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  chinese=false;
  navStatus = false;
  collapseStatus = false;
  screenStatus = false;
  isBrowser=false;
  language: string;
  component=" ";
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private elem: ElementRef,
    private translate: TranslateService,
    private router:Router,
    private route: ActivatedRoute,
    private location: Location
    ) {


    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }

   }


  ngOnInit() {
    
this.router.events
.subscribe((event) => {
  if (event instanceof NavigationEnd) { 
    // NavigationEnd do something
    let ba = event.urlAfterRedirects;
    let e = ba.split("/")
    this.language = e['1']
    if(e['1']=='cn')
    {
      this.chinese=true;
    }
    else
    {
      this.chinese=false;
    }
    if(ba=='')
    {
      this.language='en'
      this.chinese=false
    }
    if(e['2']){
      this.component = '/'+e['2']
    }
  }
});
    
    // console.log(this.location.path());
    // console.log(this.language);
    // console.log(this.component);
    if(!this.isBrowser){
      return ;
    }
    $(window).resize(() => {
      // console.log(window.innerWidth)
      if (window.innerWidth <= 768) {
        this.screenStatus = true;
      } else {
        this.screenStatus = false;
      }
    })
    $(window).scroll(() => {

      //console.log(window.scrollY)
      if ($(window).scrollTop() >= 60) {
        this.navStatus = true;
      } else {
        this.navStatus = false;
      }
    })
  }

  collapseShow() {
    let navbar = this.elem.nativeElement.querySelector('#top-navbar');
    let itemLength = navbar.querySelectorAll('li').length;
    let collDisplay = this.elem.nativeElement.querySelector('#navbar-primary');
    collDisplay = collDisplay.className.toString();
    let isShow = collDisplay.indexOf('collapse show');
    if (isShow == -1) {
      this.screenStatus = true;
      this.collapseStatus = true;
    } else {
      this.screenStatus = false;
      this.collapseStatus = false;
    }
  }

}
