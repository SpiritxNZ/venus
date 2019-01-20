import { BrowserModule } from '@angular/platform-browser';
import 'core-js/es7/reflect';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatChipsModule} from '@angular/material';
import { MatCheckboxModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

// Begin all components
import { AppComponent } from './app.component';
import { NavbarComponent } from './support/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './support/footer/footer.component';
import { ProgramsmainComponent } from './programs/programsmain/programsmain.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { SuccesscasesComponent } from './successcases/successcases.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { CourseshomeComponent } from './course/courseshome/courseshome.component';
import { ApplicationComponent } from './Pages/application/application.component';
import { CoursesComponent } from './course/courses/courses.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ProgramTesterComponent } from './programs/program-tester/program-tester.component';
import { ProgramDeveloperComponent } from './programs/program-developer/program-developer.component';
import { ProgramDeveloperBeginnerComponent } from './programs/program-developer-beginner/program-developer-beginner.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'programsmain', component:ProgramsmainComponent },
  { path:'blog', component:BlogComponent },
  { path:'successcases', component:SuccesscasesComponent },
  { path:'aboutus', component:AboutusComponent },
  { path:'contactus', component:ContactusComponent },
  { path:'courseshome', component:CourseshomeComponent },
  { path:'courses/:id', component:CoursesComponent },
  { path:'program-developer', component: ProgramDeveloperComponent},
  { path:'program-developer-beginner', component: ProgramDeveloperBeginnerComponent},
  { path:'program-tester', component: ProgramTesterComponent},
  { path:'application', component:ApplicationComponent },
  { path:'faq', component:FaqComponent },
  { path: '**',  component: HomeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProgramsmainComponent,
    BlogComponent,
    SuccesscasesComponent,
    AboutusComponent,
    ContactusComponent,
    CourseshomeComponent,
    ApplicationComponent,
    CoursesComponent,
    FaqComponent,
    ProgramTesterComponent,
    ProgramDeveloperComponent,
    ProgramDeveloperBeginnerComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[RouterModule,NavbarComponent,FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}