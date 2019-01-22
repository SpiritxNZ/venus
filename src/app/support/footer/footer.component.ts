import { Component, OnInit , Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser,Location } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() lang :string;
  isBrowser=false;
  language: string;
  component=" ";

  constructor( 
    @Inject(PLATFORM_ID)
    private platformId,
    private translate: TranslateService,
    private location: Location
  ) { 
    
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true
    }
  }
  //footer component html href need language and component value
  splitparameters(){
    let ba = this.location.path();
    let e = ba.split("/")
    this.language = e['1']
    if(ba=='')
    {
      this.language='en'
    }
    if(e['2']){
      this.component = '/'+e['2']
    }
  }
  ngOnInit() {
    this.splitparameters();
    // if(!this.isBrowser){
    //   return ;
    // }
  }

}
