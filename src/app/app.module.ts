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
import { ProgramsmainComponent } from './programs/programs-main/programs-main.component';
import { SuccesscasesComponent } from './success-cases/success-cases.component';
import { AboutusComponent } from './Pages/about-us/about-us.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { CourseshomeComponent } from './course/courses-home/courses-home.component';
import { ApplicationComponent } from './Pages/application/application.component';
import { CoursesComponent } from './course/courses/courses.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { ProgramTesterComponent } from './programs/program-tester/program-tester.component';
import { ProgramDeveloperComponent } from './programs/program-developer/program-developer.component';
import { ProgramDeveloperBeginnerComponent } from './programs/program-developer-beginner/program-developer-beginner.component';
import { BlogsListComponent } from './blog/blogs-list/blogs-list.component';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogcontentoneComponent } from './blog/blog/content/blogcontentone/blogcontentone.component';
import { BlogcontenttwoComponent } from './blog/blog/content/blogcontenttwo/blogcontenttwo.component';
import { BlogContentThreeComponent } from './blog/blog/content/blog-content-three/blog-content-three.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { BlogArticleComponent } from './blog/blog-article/blog-article.component';

const routes: Routes = [
  { path:'', redirectTo :'en/home', pathMatch: 'full' },
  { path:':lang/home', component:HomeComponent },
  { path:':lang/programs-main', component:ProgramsmainComponent },
  // Blogs
  { path:':lang/blogs', component:BlogsListComponent },
  { path:':lang/blogs-list', component:BlogsListComponent },
  { path:':lang/blog-nz-it-job-seminar', component:BlogcontentoneComponent },
  { path:':lang/blog-gradspace-intro', component:BlogcontenttwoComponent },
  { path:':lang/blog-massey-it-seminar', component:BlogContentThreeComponent },
  { path:':lang/article/:id', component: BlogArticleComponent},

  { path:':lang/blog', component:BlogComponent },
  { path:':lang/success-cases', component:SuccesscasesComponent },
  { path:':lang/about-us', component:AboutusComponent },
  { path:'contact-us', component:ContactusComponent },
  { path:':lang/courses-home', component:CourseshomeComponent },
  { path:':lang/courses', component:CoursesComponent },
  // { path:':lang/courses/:id', component:CoursesComponent },
  { path:':lang/program-developer', component: ProgramDeveloperComponent},
  { path:':lang/program-developer-beginner', component: ProgramDeveloperBeginnerComponent},
  { path:':lang/program-tester', component: ProgramTesterComponent},
  { path:':lang/application', component:ApplicationComponent },
  { path:':lang/faq', component:FaqComponent },
  { path: '**',  component: PageNotFoundComponent }
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
    BlogComponent,
    BlogcontentoneComponent,
    BlogcontenttwoComponent,
    PageNotFoundComponent,
    BlogContentThreeComponent,
    BlogArticleComponent
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