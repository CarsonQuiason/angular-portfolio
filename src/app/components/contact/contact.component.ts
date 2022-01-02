import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
  }

  initAnimations(){
    gsap.to(this.section.nativeElement, {
      backgroundPosition: '0% 0%',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        scrub: true
      }
    });
  }

}
