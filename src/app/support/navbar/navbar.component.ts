import { Component, OnInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navStatus = false;
  collapseStatus = false;
  screenStatus = false;
  isBrowser=false


  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private elem: ElementRef,

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
      console.log(window.innerWidth)
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
