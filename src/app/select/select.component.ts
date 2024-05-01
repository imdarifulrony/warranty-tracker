import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  constructor(private router: Router) {}
  handleLoginClick = () => {
    this.router.navigate(['/login']);
  };
  handleSignupClick = () => {
    this.router.navigate(['/signup']);
  };
}
