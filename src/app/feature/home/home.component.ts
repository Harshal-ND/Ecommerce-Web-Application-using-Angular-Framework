import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images=["assets/pic4.jpg","assets/pic1.jpg","assets/pic3.jpg","assets/pic5.jpg","assets/pic6.jpg",

"assets/l1.png","assets/l2.jpg","assets/l3.png","assets/l5.jpg","assets/l6.jpg",
];
}
