import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.sass']
})
export class SimilarComponent implements OnInit {

  public matches = ["Hotdog", "Wonder Woman", "Circuit Board"];

  constructor() { }

  ngOnInit(): void {
  }

}
