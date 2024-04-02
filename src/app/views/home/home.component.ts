import { Component, OnInit } from '@angular/core';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ObservableService } from '../../observable.service';
import { Section4Component } from './section-4/section-4.component';
import { Section5Component } from './section-5/section-5.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  modalSwitch: boolean = false;

  constructor(private modalSS: ObservableService){   

  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe( (resp)=> {
      this.modalSwitch = resp;
    })
  }
}
