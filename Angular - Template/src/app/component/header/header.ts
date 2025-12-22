import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
})
export class Header {
  constructor(private route: Router) {}
  NavigatePageHome() {
    this.route.navigate(['/HomePage']);
  }
  NavigatePageItems() {
    this.route.navigate(['/Items']);
  }
}
