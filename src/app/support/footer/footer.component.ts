import { Component, OnInit , Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isBrowser=false;

  constructor( @Inject(PLATFORM_ID) private platformId) { 
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }

  ngOnInit() {
    // if(!this.isBrowser){
    //   return ;
    // }
  }

}
