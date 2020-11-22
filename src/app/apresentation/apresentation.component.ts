import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css'],
})
export class ApresentationComponent implements OnInit {
  name = 'Rafael';
  job = 'UX/UI Designer';

  constructor() {}

  ngOnInit(): void {}
}
