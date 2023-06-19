import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loginvalue: boolean=true;
  constructor() { }

  ngOnInit() {
  }
  changeloginstatus(){
    this.loginvalue=!this.loginvalue;
  }

}
