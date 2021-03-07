import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public stickyHeader = true;

}
