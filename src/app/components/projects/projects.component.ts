import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  @ViewChild('chatapp', { static: true }) chatapp: ElementRef<HTMLDivElement>;
  @ViewChild('cardContainer', { static: true }) cardContainer: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title: ElementRef<HTMLHeadElement>;
  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  @ViewChild('warn', { static: true }) warn: ElementRef<HTMLParagraphElement>;
  constructor() { }

  ngOnInit(): void {
    this.initParallaxSroll();
    this.initAnimations();
    this.initWarning();
  }
  

  initAnimations(): void{
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.section.nativeElement,
        toggleActions: "restart restart restart restart",
      },
      markers: true
    });
  
    timeline.from(this.cardContainer.nativeElement.childNodes, {
      delay: .2,
      opacity: 0,
      stagger: .4
    }).from(this.title.nativeElement , {
      duration: 1.5,
      opacity: 0,
      y: -50,
    },0);
  }

  initParallaxSroll(): void{
    gsap.to(this.section.nativeElement, {
      backgroundPosition: '50% 0px',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        scrub: true,
        end: "bottom top"
      }
    });
  }

  initWarning(): void{
    let repeat = gsap.timeline({
      scrollTrigger: this.section.nativeElement,
      toggleActions: "restart restart restart restart"
    })
    repeat.to(this.warn.nativeElement, {
      color: "#FFEA00",
      duration: .6
    }).to(this.warn.nativeElement, {
      color: "black",
      duration: .6
    });

    repeat.repeat(-1).yoyo(true);
  }
}
