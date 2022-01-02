import { animate } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  @ViewChild('chatapp', { static: true }) chatapp: ElementRef<HTMLDivElement>;
  @ViewChild('manager', { static: true }) manager: ElementRef<HTMLDivElement>;
  @ViewChild('bball', { static: true }) bball: ElementRef<HTMLDivElement>;
  @ViewChild('archive', { static: true }) archive: ElementRef<HTMLDivElement>;
  @ViewChild('cardContainer', { static: true }) cardContainer: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title: ElementRef<HTMLHeadElement>;

  constructor() { }

  ngOnInit(): void {
    
    this.initAnimations();
  }

  initAnimations(): void{
    gsap.registerPlugin(ScrollTrigger);

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.cardContainer.nativeElement,
        toggleActions: "restart restart restart restart",
        markers: true
      }
    });

    timeline.from(this.title.nativeElement, {
      duration: .6,
      opacity: 0,
      y: -70
    });


    timeline.from(this.cardContainer.nativeElement.childNodes, {
        duration: 0.6,
        opacity: 0,
        y: -20,
        x: -50,
        stagger: 0.3,
    });
    
  }


}
