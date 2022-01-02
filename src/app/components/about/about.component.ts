import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);


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
  @ViewChild('container', { static: true }) aboutContainer: ElementRef<HTMLDivElement>;
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  backgroundPos;

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
  }

  ngAfterViewInit() {
    
 }
  

  initAnimations(): void{

    gsap.to(this.section.nativeElement, {
      backgroundPosition: '0% 25%',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        start: "top top", 
        end: "bottom top",
        scrub: true
      }
    });

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        toggleActions: "restart restart restart restart",
        markers: true
      }
    });
    timeline.from(this.wave.nativeElement, {
      duration: 1,
      opacity: 0,
      y: 200,
    });

    timeline.fromTo(this.greetingSpan.nativeElement, {
      width: 100 },
      {width: 280, duration: 1, delay: .5}
    );

    timeline.to(this.greetingSpan.nativeElement, {
      width: 1450, duration: 2.2, delay: .5
    });

    timeline.from(this.bodyText.nativeElement.childNodes, {
      delay: .5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 1.3
    });
  }
}
