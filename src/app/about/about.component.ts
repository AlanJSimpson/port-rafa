import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  knowledge: string[] = [
    'HTML 5,',
    'CSS 3,',
    'JavaScript,',
    'PhotoShop,',
    'Figma,',
    'Adobe XD',
  ];

  studying: string[] = ['UX Design - IGTI', 'Inglês - DoZeroÀFluencia'];

  completeCourse: string[] = [
    'UX/UI Basics Experience & Prototype - Cel.Lep',
    'Figma: Design Colaborative - Udemy',
  ];

  constructor() {}

  ngOnInit(): void {}
}
