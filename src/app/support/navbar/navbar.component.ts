import { Component, OnInit, ElementRef } from '@angular/core';
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


  constructor(
    private elem: ElementRef,

  ) { }

  ngOnInit() {

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

      // if (window.scrollY !== 0) {
      //   document.getElementById('imnavbar').style.backgroundColor = "white";
      //   document.getElementById('dropdown-menu').style.backgroundColor = "white";
      //   document.getElementById('navitems1').style.color = "black";
      //   document.getElementById('navitems3').style.color = "black";
      //   document.getElementById('navitems4').style.color = "black";
      //   document.getElementById('navitems6').style.color = "black";
      //   //document.getElementById('dropdown-item1').style.color="black";
      //   document.getElementById('dropdown-item2').style.color = "black";
      //   document.getElementById('dropdown-item3').style.color = "black";
      //   //document.getElementById('navhr').style.borderTop="1px solid rgba(0, 0, 0, 0.15)";
      //   document.getElementById('dropdown-menu').style.border = "1px solid rgba(0, 0, 0, 0.15)";

      // }
      // else if (window.scrollY == 0) {
      //   document.getElementById('imnavbar').style.backgroundColor = "transparent";
      //   document.getElementById('dropdown-menu').style.backgroundColor = "transparent";
      //   document.getElementById('navitems1').style.color = "white";
      //   document.getElementById('navitems3').style.color = "white";
      //   document.getElementById('navitems4').style.color = "white";
      //   document.getElementById('navitems6').style.color = "white";
      //   //document.getElementById('dropdown-item1').style.color="white";
      //   document.getElementById('dropdown-item2').style.color = "white";
      //   document.getElementById('dropdown-item3').style.color = "white";
      //   //document.getElementById('navhr').style.borderTop="1px solid white";
      //   document.getElementById('dropdown-menu').style.border = "1px solid white";
      // }
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
