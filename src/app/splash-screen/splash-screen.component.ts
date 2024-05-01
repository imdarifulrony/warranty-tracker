import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.scss',
})
export class SplashScreenComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['/select']);
    }, 3000);
  }
}
