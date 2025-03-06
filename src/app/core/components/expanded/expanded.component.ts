import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanded',
  templateUrl: './expanded.component.html',
  styleUrl: './expanded.component.scss',
  imports:[NgIf]
})
export class ExpandedComponent implements OnInit {
 @Input() isExpanded = false;
  constructor() {}

  ngOnInit() {}
  toggle(){
    this.isExpanded=!this.isExpanded;
  }
}
