import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-project-name',
  templateUrl: './project-name.component.html',
  styleUrl: './project-name.component.scss',
})
export class ProjectNameComponent implements OnInit {
  env = environment;

  constructor() {}

  ngOnInit() {}
}
