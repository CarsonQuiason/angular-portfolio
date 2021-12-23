import { animate } from '@angular/animations';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  cardHolder: ElementRef<HTMLDivElement>[];
  @ViewChild('chatapp', { static: true }) chatapp: ElementRef<HTMLDivElement>;
  @ViewChild('manager', { static: true }) manager: ElementRef<HTMLDivElement>;
  @ViewChild('bball', { static: true }) bball: ElementRef<HTMLDivElement>;
  @ViewChild('archive', { static: true }) archive: ElementRef<HTMLDivElement>;
  @ViewChild('cardContainer', { static: true }) cardContainer: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title: ElementRef<HTMLHeadElement>;

  constructor() { }

  ngOnInit(): void {
    //this.cardHolder.push(this.chatapp, this.manager, this.bball, this.archive);
    //this.animateCards(this.cardHolder);
    this.initAnimations();
  }

  initAnimations(): void{
    gsap.from(this.cardContainer.nativeElement.childNodes, {
        delay: 0.1,
        duration: 0.6,
        opacity: 0,
        y: -20,
        stagger: 0.3,
    });
    gsap.from(this.title.nativeElement, {
      duration: 1,
      opacity: 0,
      y: -20
  });
  }

  // animateCards(cardHolder: ElementRef[]){
  //   cardHolder.forEach(card => {
  //     gsap.from(card.nativeElement, {
  //       delay: 3,
  //       duration: 0.4,
  //       opacity: 0,
  //       y: -20,
  //     });
  //   });
  // }

}
