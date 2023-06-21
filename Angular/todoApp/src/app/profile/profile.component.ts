import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileInfo = {
    fn: 'Venkata Naveen',
    ln: 'Pasumarthi',
    email: 'Venkatanaveen@gmail.com',
    phone: '+1 3163134427',
  }
  constructor() { }

  ngOnInit() {
  }

}
