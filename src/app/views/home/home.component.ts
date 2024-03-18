import { Component } from '@angular/core';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Section1Component,
    Section2Component,
    Section3Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
