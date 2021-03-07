import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'andell-eu';
  public stickyHeader: boolean = false;

  @ViewChild('header')
  public headerElement!: ElementRef;

  @ViewChild('dummyHeader')
  public dummyHeaderElement!: ElementRef;


  public ngOnInit() {
    fromEvent(window, 'scroll').subscribe((event: any) => {
      const number = event.target.scrollingElement.scrollTop || event.target.documentElement.scrollTop;
      if(number > this.headerElement.nativeElement.offsetTop){
        this.stickyHeader = true;
      }
      else if(this.dummyHeaderElement && number < this.dummyHeaderElement.nativeElement.offsetTop) {
        console.log("HELLO");
        this.stickyHeader = false;
      }
     

    })
  }
}
