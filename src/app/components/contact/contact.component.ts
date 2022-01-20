import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from 'gsap/CSSPlugin';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormBuilder, Validators } from '@angular/forms';
import Feedback from 'src/app/models/feedback.model';

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('section', { static: true }) section: ElementRef<HTMLDivElement>;
  @ViewChild('platforms', { static: true }) platforms: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: true }) title: ElementRef<HTMLHeadElement>;
  @ViewChild('body', { static: true }) body: ElementRef<HTMLHeadElement>;
  @ViewChild('feedback', { static: true }) feedbackDiv: ElementRef<HTMLHeadElement>;
  @ViewChild('submitResponse', { static: true }) submitResponse: ElementRef<HTMLParagraphElement>;
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
    this.initParallaxScroll();
    this.initAnimations();
  }

  addFeedback(): void{
    this.feedBack.name = this.feedBackForm.get('name')?.value;
    this.feedBack.content = this.feedBackForm.get('content')?.value;
    this.feedbackService.create(this.feedBack);
    this.submitted = true;
    this.feedBackForm.reset();
    Object.keys(this.feedBackForm.controls).forEach(key => {
      this.feedBackForm.get(key).setErrors(null);
    });
  }

  initAnimations(): void{
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: this.section.nativeElement,
        toggleActions: "restart restart restart restart"
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
    }).from(this.submitResponse.nativeElement, {
      opacity: 0,
      x: -10
    });
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
