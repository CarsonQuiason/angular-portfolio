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

  async initAnimations(){

    let desiredHeight;
    let img = new Image(); 

    img.src = "../assets/backgroundTest.png";
    img.onload = function (event) {
        
      let  loadedImage = event.currentTarget as HTMLImageElement;
      desiredHeight = loadedImage.height;
      desiredHeight = desiredHeight/2;
      console.log(desiredHeight);
   }

    gsap.to(this.section.nativeElement, {
      backgroundPosition: '50% 25%',
      ease: "none",
      scrollTrigger: {
        trigger: this.section.nativeElement,
        end: "bottom top",
        scrub: true
      }
    });
  }

  getImageHeight(url){
    let height;
    let img = new Image(); 

    img.src = url;
    img.onload = function (event) {
        
      let  loadedImage = event.currentTarget as HTMLImageElement;
      height = loadedImage.height;
      console.log(height);
   }
   return height;
  }

}
