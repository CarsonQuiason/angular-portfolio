import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  @ViewChild('c1', { static: true }) c1: ElementRef<HTMLDivElement>;
  @ViewChild('c2', { static: true }) c2: ElementRef<HTMLDivElement>;
  @ViewChild('c3', { static: true }) c3: ElementRef<HTMLDivElement>;
  @ViewChild('c4', { static: true }) c4: ElementRef<HTMLDivElement>;
  @ViewChild('t1', { static: true }) t1: ElementRef<HTMLDivElement>;
  @ViewChild('t2', { static: true }) t2: ElementRef<HTMLDivElement>;
  @ViewChild('t3', { static: true }) t3: ElementRef<HTMLDivElement>;
  @ViewChild('t4', { static: true }) t4: ElementRef<HTMLDivElement>;
  @ViewChild('header', { static: true }) header: ElementRef<HTMLDivElement>;
  @ViewChild('footer', { static: true }) footer: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
    this.initParallaxScroll();
  }

  initAnimations(): void{
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.section.nativeElement,
        toggleActions: "restart restart restart restart"
      }
    });
    timeline.from(this.header.nativeElement, {
      opacity: 0,
      y: -50,
      duration: 1.8
    }, 0).from(this.t1.nativeElement, {
      opacity: 0,
      x: -30,
      duration: 2
    }, 0).from(this.c1.nativeElement, {
      width: 0,
      duration: 1,
    }, 0).from(this.c1.nativeElement.childNodes, {
      delay: 0.9,
      opacity: 0,
      x: -10,
      stagger: 0.1
    }, 0);
    
    
    
    
    timeline.from(this.t2.nativeElement, {
      opacity: 0,
      x: -30,
      duration: 2
    }, 1).from(this.c2.nativeElement, {
      width: 0,
      duration: 1,
    }, 1).from(this.c2.nativeElement.childNodes, {
      delay: 0.9,
      opacity: 0,
      x: -10,
      stagger: 0.1
    }, 1);
    

    timeline.from(this.t3.nativeElement, {
      opacity: 0,
      x: -30,
      duration: 2
    }, 2).from(this.c3.nativeElement, {
      width: 0,
      duration: 1,
    }, 2).from(this.c3.nativeElement.childNodes, {
      delay: 0.9,
      opacity: 0,
      x: -10,
      stagger: 0.1
    }, 2)
    
    timeline.from(this.t4.nativeElement, {
      opacity: 0,
      x: -30,
      duration: 2
    }, 3).from(this.c4.nativeElement, {
      width: 0,
      duration: 1,
    }, 3).from(this.c4.nativeElement.childNodes, {
      delay: 0.9,
      opacity: 0,
      x: -10,
      stagger: 0.1
    }, 3);

    timeline.from(this.footer.nativeElement.childNodes, {
      opacity: 0,
      duration: 1,
    })

  }


  initParallaxScroll(): void{
    gsap.to(this.section.nativeElement, {
      backgroundPosition: '50% 0px', 
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        scrub: true,
      }
    });

  }

}
