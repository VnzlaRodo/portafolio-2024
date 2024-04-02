import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

 private experiencia = [    
    {
      title: "Desarrollador",
      date: "jun 2023 - presente",
      business: "FreeLancer",
      description: "Desarrollo de páginas comerciales (Ecommerce, publicitarias, Landing page. empresarial diferentes clientes de plataformas FreeLancer. Mayormente basado en conocimiento de Frontend: Bootstrap, Laravel, Angular, WordPress, Webflow; en algunas áreas de Backend como: conectar endpoint's con vistas a través de PHP y Ajax. también manejo de base de datos básico.",
      tasks: ""
    },
    {
      title: "Desarrollador Frontend, Remoto",
      date: "ago 2020 - jun2023",
      business: "NaguaroSoftware",
      description: "Participe en el desarrollo de diferentes desarrollar web's y aplicaciones web usando tecnologías como Angular, Laravel, WordPress, Javascript, CSS, Shopify, Prestashop; donde fui supervisado más lo carga de desarrollo estaba en mis manos, siguiendo los requerimientos de diversos clientes para la empresa. La labor fue cumplir a cabalidad con et Frontend para conectar con el Backend por parte de otro desarrollador.",
      tasks: ""
    },
    {
      title: "Desarrollador",
      date: "mar 2020 - jul2020",
      business: "FreeLancer",
      description: "Colaborador en desarrollo de sistema web empresarial.",
      tasks: "Tareas realizadas: Apoyo en el desarrollo de aplicación web usando Angular y Angular Material, donde me encargue de aplicar funciones de manejo da datos usando formularios reactivos para el manejo de cuestionarios de análisis a empleados."
    },
    {
      title: "Desarrollador",
      date: "jul 2020 - 2020",
      business: "FreeLancer,",
      description: "Desarrollo de plantillas para web de clínica.",
      tasks: "Tareas realizadas: Desarrollo de Frontend y formularios. Se hizo uso de tecnologías como PHP, Bootstrap y JavaScript; junto al Framework Laravel como tecnología principal."
    }
  ];

 private proyectos = [
    {
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
    },
    {
      title: "Toi",
      date: "2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat repellat ratione unde tempore recusandae alias, corrupti ipsam eveniet a quam, minima repellendus natus suscipit inventore. Corporis exercitationem adipisci similique?",
      images: {
        avatar: "./assets/img/proyectos/toi-avatar.jpg",
        desktop: [
          "./assets/img/proyectos/toi-1.png"
        ],
        mobile: [
          "./assets/img/proyectos/toi-mobile-1.png"
        ]
      },
      tags: [
        {
          name: "Angular",
          class: "angular",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-angular"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" /><path d="M9 15l3 -8l3 8" /><path d="M10 13h4" /></svg>`
        },
        {
          name: "Boostrap",
          class: "boostrap",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>`
        },
        {
          name: "AnimateCss",
          class: "animatecss",
          ico: ""
        }
      ],
      github: "",
      link: ""
    },
    {
      title: "Balabamba",
      date: "2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat repellat ratione unde tempore recusandae alias, corrupti ipsam eveniet a quam, minima repellendus natus suscipit inventore. Corporis exercitationem adipisci similique?",
      images: {
        avatar: "./assets/img/proyectos/balabamba-avatar.jpg",
        desktop: [
          "./assets/img/proyectos/balabamba-1.png",
          "./assets/img/proyectos/balabamba-2.png",
          "./assets/img/proyectos/balabamba-3.png",
          "./assets/img/proyectos/balabamba-4.png",
          "./assets/img/proyectos/balabamba-5.png",
        ],
        mobile: [
          "./assets/img/proyectos/balabamba-6.png",
        ]
      },
      tags: [
        {
          name: "Laravel",
          class: "laravel",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" /><path d="M11 18v4" /><path d="M7 15.5l7 -4" /><path d="M14 7.5v4" /><path d="M14 11.5l4 2.5" /><path d="M11 13v-7.5l-4 -2.5l-4 2.5" /><path d="M7 8l4 -2.5" /><path d="M18 10l4 -2.5" /></svg>`
        },
        {
          name: "Angular",
          class: "angular",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-angular"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.428 17.245l6.076 3.471a1 1 0 0 0 .992 0l6.076 -3.471a1 1 0 0 0 .495 -.734l1.323 -9.704a1 1 0 0 0 -.658 -1.078l-7.4 -2.612a1 1 0 0 0 -.665 0l-7.399 2.613a1 1 0 0 0 -.658 1.078l1.323 9.704a1 1 0 0 0 .495 .734z" /><path d="M9 15l3 -8l3 8" /><path d="M10 13h4" /></svg>`
        },
        {
          name: "Boostrap",
          class: "boostrap",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>`
        }
      ],
      github: "",
      link: ""
    },
  ];

  constructor() { }

  getExperiences(){
    return this.experiencia;
  }

  getProjects(){
    return this.proyectos;
  }
}
