import { animate } from '@angular/animations';
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
    this.initAnimations();
  }

  initAnimations(): void{


    gsap.to(this.section.nativeElement, {
      backgroundPosition: '0% 1%',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        scrub: true
      }
    });

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.cardContainer.nativeElement,
        toggleActions: "restart restart restart restart",
      }
    });

    timeline.from(this.title.nativeElement, {
      duration: .5,
      opacity: 0,
      y: -70
    });


    timeline.from(this.cardContainer.nativeElement.childNodes, {
        duration: 0.4,
        opacity: 0,
        y: -20,
        x: -50,
        stagger: 0.3,
    });
  }


}
