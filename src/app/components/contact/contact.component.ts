import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormBuilder, Validators } from '@angular/forms';
import Feedback from 'src/app/models/feedback.model';
import gsapCore from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  @ViewChild('platforms', { static: true }) platforms: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title: ElementRef<HTMLHeadElement>;
  @ViewChild('body', { static: true }) body: ElementRef<HTMLHeadElement>;
  @ViewChild('submitResponse', { static: true }) submitResponse: ElementRef<HTMLDivElement>;
  @ViewChild('feedback', { static: true }) feedbackDiv: ElementRef<HTMLHeadElement>;
  constructor(private feedbackService: FeedbackService, private formbuilder: FormBuilder) { }

  submitted: boolean;

  feedBack: Feedback = {
    name: '',
    content: ''
  };

  feedBackForm = this.formbuilder.group({
    name: ['',[Validators.required]],
    content: ['',[Validators.required]]
  });


  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
    this.initParallaxScroll();
    this.initAnimations();
  }

  ngAfterViewInit(){
    ScrollTrigger.refresh();
  }

  addFeedback(): void{
    this.feedBack.name = this.feedBackForm.get('name')?.value;
    this.feedBack.content = this.feedBackForm.get('content')?.value;
    this.feedbackService.create(this.feedBack);
    this.submitted = true;
    this.feedBackForm.reset();
    //Removes errors when form is reset
    Object.keys(this.feedBackForm.controls).forEach(key => {
      this.feedBackForm.get(key).setErrors(null);
    });
  }

  initAnimations(): void{
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.section.nativeElement,
        toggleActions: "restart restart restart restart",
      }
    });

    timeline.from(this.title.nativeElement, {
      opacity: 0,
      duration: 1,
      textShadow: "8px 8px 10px black"
    }).from(this.body.nativeElement, {
      duration: 1,
      opacity: 0,
      y: -10
    }).from(this.platforms.nativeElement.childNodes, {
      opacity: 0,
      y: -10,
      stagger: 0.4
    }).from(this.feedbackDiv.nativeElement.childNodes, {
      delay: 1,
      opacity: 0,
      x: -10,
      stagger: .5
    });
    if(this.submitted){
      timeline.from(this.submitResponse.nativeElement, {
        opacity: 0,
        x: -10
      });
    }
    
  }

  initParallaxScroll(): void{
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
}
