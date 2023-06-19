import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  loginvalue: boolean=true;

  constructor() { }

  ngOnInit() {
  }

  changeloginstatus(){
    this.loginvalue=!this.loginvalue;
  }

}
 