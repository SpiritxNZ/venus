import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onscroll = function(){
      if(document.documentElement.scrollTop !== 0){
        document.getElementById('imnavbar').style.backgroundColor="white";
        document.getElementById('navitems1').style.color="black";
        document.getElementById('navitems2').style.color="black";
        document.getElementById('navitems3').style.color="black";
        document.getElementById('navitems4').style.color="black";
        document.getElementById('navitems5').style.color="black";
        document.getElementById('navitems6').style.color="black";
      }
      else if (document.documentElement.scrollTop == 0){
        document.getElementById('imnavbar').style.backgroundColor="transparent";
        document.getElementById('navitems1').style.color="white";
        document.getElementById('navitems2').style.color="white";
        document.getElementById('navitems3').style.color="white";
        document.getElementById('navitems4').style.color="white";
        document.getElementById('navitems5').style.color="white";
        document.getElementById('navitems6').style.color="white";
      }
    }
  }
}
