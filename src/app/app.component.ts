import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  title = 'Portfolio';
  @ViewChild('about', { read: ElementRef }) aboutComp: ElementRef;
  @ViewChild('exp', { read: ElementRef }) expComp: ElementRef;
  @ViewChild('proj', { read: ElementRef }) projComp: ElementRef;
  @ViewChild('contact', { read: ElementRef }) contactComp: ElementRef;
  constructor() {}

  async refresh(){
    ScrollTrigger.refresh();
  }

  ngOnInit(){
  }

  

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async scrollToComponent(state: Number){
    switch(state){
      case 0:
        this.aboutComp.nativeElement.scrollIntoView({behavior: "smooth"})
        break;
      case 1:
        this.expComp.nativeElement.scrollIntoView({behavior: "smooth"})
        break;
      case 2:
        this.projComp.nativeElement.scrollIntoView({behavior: "smooth"})
        break;
      case 3:
        this.contactComp.nativeElement.scrollIntoView({behavior: "smooth"})
        break;  
    }
    
  }
}



