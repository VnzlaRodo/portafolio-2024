import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { InfoService } from '../../../info.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss'
})
export class Section2Component {

  info: any;
  
  constructor( private data:InfoService, @Inject(PLATFORM_ID) private platformId: Object ){
      this.info = data.getExperiences();    
  }

 

  ngOnInit(): void {   
    if (isPlatformBrowser(this.platformId)) {
    
      window.addEventListener("scroll", ()=>{
        var expe = document.querySelectorAll(".expe");
     
        expe.forEach((element,i) => {
          
          let posicion = element.getBoundingClientRect().top;
          let tamanoPantalla = window.innerHeight;

          element.classList.toggle("animate-fade-down", posicion < tamanoPantalla );          
          element.classList.toggle("opacity-100", posicion < tamanoPantalla );
          
        });
      })
    }   
  } 
}
