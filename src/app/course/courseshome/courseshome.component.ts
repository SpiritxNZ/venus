import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {TranslateService} from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-courseshome',
  templateUrl: './courseshome.component.html',
  styleUrls: ['./courseshome.component.css']
})
export class CourseshomeComponent implements OnInit {
  
  /** Test data for course cards. Properties:
   * name: name of the course; string
   * lecturer: lecturer/teacher for the course; string
   * desc: summary or description of the course; string
   * thumbnail: link to the image used for the course; string
   * link: link to the course page when the user clicks on the card; string
   * freetrial: whether this course has a free trial (true if there is a free trial); boolean
  */
 courses: any [] = [
  {
    name: "Course 3", lecturer: "Jon Smith", desc: "Some summary of the course. The course is about",
    thumbnail: "/assets/tutor_images/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses/3", freetrial: false
  }

];
  currentlang=" ";
  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    public apiService: ApiService
  ) {translate.setDefaultLang(this.route.snapshot.paramMap.get('lang'));  }
  passdata()
  {
    this.currentlang=this.route.snapshot.paramMap.get('lang');
  }
  ngOnInit() {
    this.passdata;
    // Gets list of courses from API 
    this.apiService.getAllCourses().subscribe(
      (res)=>console.log(res),
      // Needs to return error message to the user
      (err)=>console.warn(err)
    )
  }

}
