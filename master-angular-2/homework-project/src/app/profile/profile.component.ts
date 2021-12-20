import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  public profile = {
    name: "Robot",
    age: 338,
    rate: 9
  };

  constructor() { }

  ngOnInit(): void {
  }

}
