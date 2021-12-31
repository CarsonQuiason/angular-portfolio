import { animate } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild, OnChanges, Input, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  cardHolder: ElementRef<HTMLDivElement>[];
  @ViewChild('chatapp', { static: true }) chatapp: ElementRef<HTMLDivElement>;
  @ViewChild('manager', { static: true }) manager: ElementRef<HTMLDivElement>;
  @ViewChild('bball', { static: true }) bball: ElementRef<HTMLDivElement>;
  @ViewChild('archive', { static: true }) archive: ElementRef<HTMLDivElement>;
  @ViewChild('cardContainer', { static: true }) cardContainer: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title: ElementRef<HTMLHeadElement>;
  @Input() prop: number = 0;
  constructor() { }

  ngOnInit(): void {
    ScrollTrigger.refresh();
    this.initAnimations();
  }

  initAnimations(): void{
    gsap.from(this.cardContainer.nativeElement.childNodes, {
        scrollTrigger: {
          trigger: this.cardContainer.nativeElement,
          toggleActions: "restart restart restart restart",
          markers: true,
        },
        duration: 0.6,
        opacity: 0,
        y: -20,
        stagger: 0.3,
    });
    // gsap.from(this.title.nativeElement, {
    //   delay: 0.1,
    //   scrollTrigger: this.title.nativeElement,
    //   duration: 1,
    //   opacity: 0,
    //   y: -20
    // });
  }
}
