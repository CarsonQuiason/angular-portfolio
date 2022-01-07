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

  constructor() { }

  ngOnInit(): void {
    this.initParallaxSroll();
    this.initAnimations();
  }

  initAnimations(): void{
    

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.section.nativeElement,
        toggleActions: "restart restart restart restart",
      },
      markers: true
    });


      // timeline.from(this.cardContainer.nativeElement.childNodes, {
      //   y: -20,
      //   opacity: 0,
      //   stagger: 0.3
      // });
  }

  initParallaxSroll(){
    gsap.to(this.section.nativeElement, {
      backgroundPosition: '50% 25%',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        scrub: true,
        end: "bottom top"
      }
    });
  }


}
