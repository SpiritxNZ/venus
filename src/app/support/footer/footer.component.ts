import { Component, OnInit , Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LangService } from '../../services/lang.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() lang :string;
  isBrowser=false;

  constructor( 
    @Inject(PLATFORM_ID)
    private platformId,
    private translate: TranslateService,
    private data: LangService,
  ) { 
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
