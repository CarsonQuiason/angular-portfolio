import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit, OnInit {

  @ViewChild('body', { static: true }) bodyText: ElementRef<HTMLParagraphElement>;
  @ViewChild('greeting', { static: true }) greetingSpan: ElementRef<HTMLSpanElement>;
  @ViewChild('wave', { static: true }) wave: ElementRef<HTMLImageElement>;
  @ViewChild('hello', { static: true }) hello: ElementRef<HTMLElement>;

  timeline = gsap.timeline({});

  constructor() { }

  ngOnInit(): void {
    ScrollTrigger.refresh();
    this.initAnimations();    
  }
  ngAfterViewInit() {
    ScrollTrigger.refresh();
 }
  

  initAnimations(): void{
    ScrollTrigger.refresh();
    this.timeline.from(this.wave.nativeElement, {
      duration: 1,
      opacity: 0,
      y: 200,
    });

    this.timeline.fromTo(this.greetingSpan.nativeElement,
      {width: 100},
      {width: 280, duration: 1, delay: .5}
    );

    this.timeline.to(this.greetingSpan.nativeElement, {
      width: 1450, duration: 2.2, delay: .5
    });

    this.timeline.from(this.bodyText.nativeElement.childNodes, {
      delay: .5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 1.3
    });
  }
}
