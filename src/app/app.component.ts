import { Component } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'findjob';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}
useLanguage(language: string) {
  this.translate.use(language);
}
}
