import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-section-1',
  standalone: true,
  imports: [],
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss'
})
export class Section1Component implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {   
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener("scroll", ()=>{
        var header = document.querySelector("#header");

        let posicion = header?.getBoundingClientRect().top;
        let tamanoPantalla = window.innerHeight;

        if (posicion) header?.classList.toggle("animate-jump", window.scrollY < tamanoPantalla );
      })
    }   
  } 
}
