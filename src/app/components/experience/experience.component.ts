import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(){
    gsap.to(this.section.nativeElement, {
      backgroundPosition: '0% 10%',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        scrub: true
      }
    });

  }

}
