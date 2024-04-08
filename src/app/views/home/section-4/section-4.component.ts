import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.scss'
})
export class Section4Component implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {   
    if (isPlatformBrowser(this.platformId)) {
    
      window.addEventListener("scroll", ()=>{
        var mi = document.querySelector("#sobre-mi");    
        
          
          let posicion = mi?.getBoundingClientRect().top;
          let tamanoPantalla = window.innerHeight;

          if (posicion) mi?.classList.toggle("animate-flip-down", posicion < tamanoPantalla );          
          if (posicion) mi?.classList.toggle("opacity-100", posicion < tamanoPantalla );
          
        
      })
    }   
  }

}
