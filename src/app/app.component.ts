import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    ModalComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portafolio-2024';

  modalSwitch: boolean = false;

  constructor(private modalSS: ObservableService){

  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((resp)=>{
      this.modalSwitch = resp;
    });
  }
}
