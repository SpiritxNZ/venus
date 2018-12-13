import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

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
    thumbnail: "http://www.cs.stir.ac.uk/~kjt/sailing/lasc/image/wallpaper/loch-winter-16-9.jpg",
    link: "#", freetrial: false
  },
  {
    name: "Course 2", lecturer: "Leon Parris", desc: "Another summary in which information about the course is written.",
    thumbnail: "http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg", 
    link: "#", freetrial: false
  },
  {
    name: "Another course", lecturer: "Frank Wildhorn", desc: "Summary that is shorter.",
    thumbnail: "https://wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Background-4.jpg",
    link: "#", freetrial: true
  },
  {
    name: "Varialchemy 101", lecturer: "Varian", desc: "Learn to make purple (or blue) alchemy balls just like Varian!",
    thumbnail: "https://www.cbrneportal.com/wp-content/uploads/2016/01/chemical-purple-e1453382276297.jpg",
    link: "#", freetrial: true
  },
  {
    name: "This is a course", lecturer: "Eugenie Danglars", desc: "And this is a summary of the course.",
    thumbnail: "http://www.designbolts.com/wp-content/uploads/2015/07/Tropiccold-nature-iphone-6-wallpaper.jpg",
    link: "#", freetrial: false
  },
  {
    name: "How to make cheese", lecturer: "Sir Kaze", desc: "This course is about cheese and the many different ways of making it.",
    thumbnail: "https://cdn.allwallpaper.in/wallpapers/1920x1200/10886/it-is-cheese-1920x1200-wallpaper.jpg",
    link: "#", freetrial: true
  },
  {
    name: "Something or another", lecturer: "Albert de Morcef", desc: "Things should be written here. This course is about something and is recommended for people.",
    thumbnail: "https://dreamsky10.com/wp-content/uploads/2016/09/sunset-wallpaper-hd-HD10.jpg",
    link: "#", freetrial: false
  },
];
  
  constructor() { }

  ngOnInit() {
  }

}
