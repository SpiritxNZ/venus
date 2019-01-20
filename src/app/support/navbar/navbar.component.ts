import { Component, OnInit, ElementRef, Inject, PLATFORM_ID,EventEmitter, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as $ from 'jquery';
import {TranslateService} from '@ngx-translate/core';
import { LangService } from '../../services/lang.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navStatus = false;
  collapseStatus = false;
  screenStatus = false;
  isBrowser=false;
  @Output() languageChange: EventEmitter<string> = new EventEmitter<string>();
  private language: string;
  private router:Router;
  changelangtocn()
  {
    var datalang='cn';
    this.data.changetesttocn();
    this.translate.use(window.location.pathname+this.data.test);
    this.router.navigate(['/successcases',datalang]);
  }
  changelangtoen()
  {
    var datalang='en';
    this.data.changetesttoen();
    this.translate.use(window.location.pathname+this.data.test);
    this.router.navigate([window.location.href,datalang]);
  }
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private elem: ElementRef,
    private translate: TranslateService,
    private data: LangService

  ) {

    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
   }
  ngOnInit() {
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
