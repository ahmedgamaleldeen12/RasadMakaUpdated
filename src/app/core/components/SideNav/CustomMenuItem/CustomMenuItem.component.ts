import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CustomMenuItem } from '../custom_menu_item';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ExpandedComponent } from "../../expanded/expanded.component";

@Component({
  selector: 'app-CustomMenuItem',
  templateUrl: './CustomMenuItem.component.html',
  styleUrl: './CustomMenuItem.component.scss',
  imports: [NgIf, RouterLinkActive, RouterLink, NgFor, NgClass, ExpandedComponent]
})
export class CustomMenuItemComponent implements OnInit {

  constructor(private router: Router) {}
  @Input() item!: CustomMenuItem;
  @Input() role!: number;
  @Input() i!: number;
  @Input() menuValue!: boolean;
  @Input() noNav?: boolean;
  // code expanded here 
  isActive = false;
  ngOnInit() {
    this.router.events.subscribe((val) => {this.checkIsActive();});
    this.checkIsActive();
  }
  resolveChildren(item: CustomMenuItem, nam: string,newVal:any): CustomMenuItem {
    let res = { ...item };
    (res as any)[nam] = newVal;
    return res;
  }
  checkIsActive() {
    this.isActive = ((this.item.url && window.location.href.includes(this.item.url ?? '') )||this.item.children?.some((x) =>window.location.href.includes(x.url ?? ''))) ??false;
  }
}
