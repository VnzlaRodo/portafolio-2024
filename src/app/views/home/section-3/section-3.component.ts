import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { InfoService } from '../../../info.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { ObservableService } from '../../../observable.service';
import { NgClass, isPlatformBrowser } from '@angular/common';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-section-3',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './section-3.component.html',
  styleUrl: './section-3.component.scss'
})
export class Section3Component implements OnInit{

  info: any;
  icons: SafeHtml[] = [];
  modalSwitch: boolean = false;
  modalSwitchGallery: boolean = false;
  itemModal: Project = {
    title: "CHECKOUT PILLOFON",
    date: "2022",
    description: "Web como herramienta para llevar a clientes potenciales de la empresa adquirir de forma rapida y sencilla los productos prestados, además de captar las UTMs de campañas en las redes.",      
    images: {
      avatar: "./assets/img/proyectos/pillo-avatar.jpg",
      desktop: [
        "./assets/img/proyectos/pillo-1.png",
        "./assets/img/proyectos/pillo-2.png",
        "./assets/img/proyectos/pillo-3.png"
      ],
      mobile: [
        "./assets/img/proyectos/pillo-4.png",
        "./assets/img/proyectos/pillo-5.png",
        "./assets/img/proyectos/pillo-6.png"
      ]
    },
    tags: [
      {
        name: "Laravel",
        class: "laravel",
        ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" /><path d="M11 18v4" /><path d="M7 15.5l7 -4" /><path d="M14 7.5v4" /><path d="M14 11.5l4 2.5" /><path d="M11 13v-7.5l-4 -2.5l-4 2.5" /><path d="M7 8l4 -2.5" /><path d="M18 10l4 -2.5" /></svg>`
      },
      {
        name: "Boostrap",
        class: "boostrap",
        ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>`
      },
      {
        name: "javascript",
        class: "javascript",
        ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>`
      }
    ],
    github: "#",
    link: "#"
  };
  imagesGallery: [] = [];
  
  constructor(private projects : InfoService, private sanitizer: DomSanitizer, private modalSS: ObservableService, @Inject(PLATFORM_ID) private platformId: Object){
    this.info = projects.getProjects();

    this.info.forEach((elements:any) => {
      elements.tags.forEach((element:any) => {
        this.icons.push(sanitizer.bypassSecurityTrustHtml(element.ico))
      });
    });    
    
  }


  ngOnInit(): void {
    this.modalSS.$modal.subscribe( (resp)=> {
          this.modalSwitch = resp;
    });

    if (isPlatformBrowser(this.platformId)) {
    
      window.addEventListener("scroll", ()=>{
        var card = document.querySelectorAll(".card");
     
        card.forEach((element,i) => {
          
          let posicion = element.getBoundingClientRect().top;
          let tamanoPantalla = window.innerHeight;
          
          element.classList.toggle("animate-jump-in", posicion < tamanoPantalla );
          element.classList.toggle("opacity-100", posicion < tamanoPantalla );
          
        });

        

      })
    }   
  }

  modalOpen(item:any){
    this.modalSwitch = true;
    this.itemModal = item;

  }

  closeModal(){
    this.modalSwitch = false;
  }

  modalOpenGallery(images:any){
    this.modalSwitchGallery = true;
    this.imagesGallery = images;
  }

  closeModalGallery(){
    this.modalSwitchGallery = false;
  }

  transformIco(ico:string){
    let icoHtml: SafeHtml = "";

    icoHtml = this.sanitizer.bypassSecurityTrustHtml(ico);

    return icoHtml;
  }

}
