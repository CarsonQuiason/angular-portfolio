import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from "gsap";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild('body', { static: true }) bodyText: ElementRef<HTMLParagraphElement>;
  @ViewChild('greeting', { static: true }) greetingSpan: ElementRef<HTMLSpanElement>;

  
  constructor() { }

  ngOnInit(): void {
    this.initAnimations();
    
    

  }

  initAnimations(): void{
    gsap.from(this.bodyText.nativeElement.childNodes, {
      delay: 4,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 1.3
    });

    gsap.fromTo(this.greetingSpan.nativeElement, 
      {width: 100},
      {width: 1450, delay: 1.5, duration: 2.5}
      );
  }

}
