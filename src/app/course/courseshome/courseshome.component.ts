import { Component, OnInit } from '@angular/core';

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
    name: "Course 1", lecturer: "Jon Smith", desc: "Some summary of the course. The course is about",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses", freetrial: false
  },
  {
    name: "Course 2", lecturer: "Leon Parris", desc: "Another summary in which information about the course is written.",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg", 
    link: "/courses", freetrial: false
  },
  {
    name: "Another course", lecturer: "Frank Wildhorn", desc: "Summary that is shorter.",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses", freetrial: true
  },
  {
    name: "Varialchemy 101", lecturer: "Varian", desc: "Learn to make purple (or blue) alchemy balls just like Varian!",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses", freetrial: true
  },
  {
    name: "This is a course", lecturer: "Eugenie Danglars", desc: "And this is a summary of the course.",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses", freetrial: false
  },
  {
    name: "How to make cheese", lecturer: "Sir Kaze", desc: "This course is about cheese and the many different ways of making it.",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses", freetrial: true
  },
  {
    name: "Something or another", lecturer: "Albert de Morcef", desc: "Things should be written here. This course is about something and is recommended for people.",
    thumbnail: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    link: "/courses", freetrial: false
  },
];
  
  constructor() { }

  ngOnInit() {
  }

}
