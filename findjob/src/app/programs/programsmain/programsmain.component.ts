import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-programsmain',
  templateUrl: './programsmain.component.html',
  styleUrls: ['./programsmain.component.css']
})
export class ProgramsmainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  showbtn1()
  {
    document.getElementById("learnmorebtn1").style.opacity="1";
  }
  hidebtn1()
  {
    document.getElementById("learnmorebtn1").style.opacity="0";
  }
  showbtn2()
  {
    document.getElementById("learnmorebtn2").style.opacity="1";
  }
  hidebtn2()
  {
    document.getElementById("learnmorebtn2").style.opacity="0";
  }
  showbtn3()
  {
    document.getElementById("learnmorebtn3").style.opacity="1";
  }
  hidebtn3()
  {
    document.getElementById("learnmorebtn3").style.opacity="0";
  }
  showbtn4()
  {
    document.getElementById("learnmorebtn4").style.opacity="1";
  }
  hidebtn4()
  {
    document.getElementById("learnmorebtn4").style.opacity="0";
  }
  showbtn5()
  {
    document.getElementById("learnmorebtn5").style.opacity="1";
  }
  hidebtn5()
  {
    document.getElementById("learnmorebtn5").style.opacity="0";
  }
  showbtn6()
  {
    document.getElementById("learnmorebtn6").style.opacity="1";
  }
  hidebtn6()
  {
    document.getElementById("learnmorebtn6").style.opacity="0";
  }
    
}
