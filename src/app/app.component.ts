import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
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
  @ViewChild('nav', { static: true }) nav: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  constructor() {}

  ngOnInit(){
    this.initAnimations();
  }

  scrollToComponent(state: Number): void{
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

  initAnimations(): void{
    gsap.from(this.logo.nativeElement, {
      opacity: 0,
      duration: .6,
      y: -15,
      stagger: 0.2
    });
    gsap.from(this.nav.nativeElement.childNodes, {
      opacity: 0,
      duration: .6,
      y: -15,
      stagger: 0.2
    });
  }
}



