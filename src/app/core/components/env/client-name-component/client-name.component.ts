import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
@Component({
  selector: 'app-client-name',
  templateUrl: './client-name.component.html',
  styleUrl: './client-name.component.scss',
})
export class ClientNameComponent implements OnInit {
  env = environment;
  @Input() SubName!: string ;
  constructor() {}

  ngOnInit() {}
}
