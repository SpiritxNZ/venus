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
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';
import { BlogComponent } from './blog/blog/blog.component';

const routes: Routes = [
  { path:'', redirectTo :'en/home', pathMatch: 'full' },
  { path:':lang/home', component:HomeComponent },
  { path:':lang/programsmain', component:ProgramsmainComponent },
  { path:':lang/blogs', component:BlogsListComponent },
  { path:'blogs/:id', component:BlogComponent },
  { path:':lang/successcases', component:SuccesscasesComponent },
  { path:':lang/aboutus', component:AboutusComponent },
  { path:'contactus', component:ContactusComponent },
  { path:':lang/courseshome', component:CourseshomeComponent },
  { path:':lang/courses', component:CoursesComponent },
  // { path:':lang/courses/:id', component:CoursesComponent },
  { path:':lang/program-developer', component: ProgramDeveloperComponent},
  { path:':lang/program-developer-beginner', component: ProgramDeveloperBeginnerComponent},
  { path:':lang/program-tester', component: ProgramTesterComponent},
  { path:':lang/application', component:ApplicationComponent },
  { path:':lang/faq', component:FaqComponent },
  // { path: '**',  component: HomeComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProgramsmainComponent,
    SuccesscasesComponent,
    AboutusComponent,
    ContactusComponent,
    CourseshomeComponent,
    ApplicationComponent,
    CoursesComponent,
    FaqComponent,
    ProgramTesterComponent,
    ProgramDeveloperComponent,
    ProgramDeveloperBeginnerComponent,
    BlogsListComponent,
    BlogComponent
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