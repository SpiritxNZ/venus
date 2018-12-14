import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
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
import { ProgramComponent } from './programs/program/program.component';
import { ApplicationComponent } from './Pages/application/application.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatChipsModule} from '@angular/material';
import { MatFormFieldModule} from '@angular/material';
import { MatCheckboxModule, MatSelectModule } from '@angular/material';
import 'core-js/es7/reflect';
import { CoursesComponent } from './course/courses/courses.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'programsmain', component:ProgramsmainComponent },
  { path:'blog', component:BlogComponent },
  { path:'successcases', component:SuccesscasesComponent },
  { path:'aboutus', component:AboutusComponent },
  { path:'contactus', component:ContactusComponent },
  { path:'courseshome', component:CourseshomeComponent },
  { path:'courses', component:CoursesComponent },
  { path:'program', component:ProgramComponent },
  { path:'application', component:ApplicationComponent }
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
    ProgramComponent,
    ApplicationComponent,
    CoursesComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
