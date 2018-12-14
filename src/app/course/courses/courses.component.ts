import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  /**Test data for course ---------- */
  courseInfo = {
    name: "Video Title", target: "University Level", 
    description: "Information about the video. Illo et et laborum maxime ut nam. Doloribus et enim voluptatem \
    quidem dignissimos et. Fuga vitae earum distinctio et officia dolor et aliquam. Ipsa odio unde velit similique. \
    Aut aperiam optio voluptate omnis veritatis. Officia nesciunt earum suscipit nesciunt quas et vel" }

  courseLecturer = {
    name: "Edwin Zhu", role: "Senior Lecturer",
    subject: "Backend development", 
    image: "/assets/40ceae84961e343ddf7747cb28fc347f.card-korean.jpg",
    expList: [] = [
    "Graduated from such-and-such",
    "4 years experience with blablabla",
    "Bullet point"
    ]
  };

  courseList: any[] = [
    { name: "Fidentus Omnium", link: "#" },
    { name: "Magister Mentium", link: "#" },
    { name: "Lorem Ipsum", link: "#" },
    { name: "Fidentus Omnium", link: "#" },
    { name: "Magister Mentium", link: "#" },
    { name: "Lorem Ipsum", link: "#" },
    { name: "Fidentus Omnium", link: "#" },
    { name: "Magister Mentium", link: "#" },
    { name: "Lorem Ipsum", link: "#" },
  ];

  /** End of test data -------------------------- */

  constructor(private sanitizer: DomSanitizer) { 
    this.video = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/4CbLXeGSDxg");
  }

  ngOnInit() {
  }

}
