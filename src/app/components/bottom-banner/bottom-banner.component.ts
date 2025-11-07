import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-banner',
  templateUrl: './bottom-banner.component.html',
  styleUrls: ['./bottom-banner.component.scss']
})
export class BottomBannerComponent implements OnInit {
  isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('portfolioBannerDismissed');
    if (dismissed === 'true') {
      this.isVisible = false;
    }
  }

  dismiss(): void {
    this.isVisible = false;
    localStorage.setItem('portfolioBannerDismissed', 'true');
  }
}
