import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object){

  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      // Accede a propiedades del navegador aquí
      window.addEventListener("scroll", ()=>{
        var navbar = document.querySelector("nav");
        navbar?.classList.toggle("sticky", window.scrollY > 100);
      })
      console.log(window.location.href);
    }
  }
}
