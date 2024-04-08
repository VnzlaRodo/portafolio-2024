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
      description: "Durante mi experiencia laboral en desarrollo de páginas comerciales (Ecommerce, publicitarias, Landing page) para diversos clientes en plataformas Freelancer, he destacado en el ámbito del Frontend, utilizando herramientas como Bootstrap, Laravel, Angular, WordPress y Webflow. En algunas ocasiones, he incursionado en áreas del Backend al conectar endpoints con vistas a través de PHP y Ajax. Además, cuento con habilidades en el manejo básico de bases de datos para complementar mis capacidades y ofrecer soluciones integrales en el desarrollo web.",
      tasks: ""
    },
    {
      title: "Desarrollador Frontend, Remoto",
      date: "ago 2020 - jun2023",
      business: "NaguaroSoftware",
      description: "Durante mi experiencia laboral, participé activamente en el desarrollo de diversas páginas web y aplicaciones utilizando tecnologías como Angular, Laravel, WordPress, JavaScript, CSS, Shopify y Prestashop. En este rol, tuve la responsabilidad principal en la carga de trabajo, siendo supervisado mientras seguía los requerimientos de múltiples clientes de la empresa. Mi función consistía en cumplir meticulosamente con los aspectos del Frontend y facilitar la conexión con el Backend a cargo de otro desarrollador, asegurando así la integración efectiva de las funcionalidades del proyecto.",
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
      title: "Balabamba",
      date: "2022",
      description: "Desarrollé el entorno frontend desde cero para una web de un club de playa utilizando Laravel, Bootstrap y JavaScript. La web publicitaria del club incluye un <b>blog autoadministrable</b>, donde preparé el área del blog para su integración con una API desarrollada por otro compañero. Además de que contiene <b>animaciones</b> por elementos cuando están en el <b>viewport</b>.",
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
          name: "CSS",
          class: "sass",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-sass"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10.523c2.46 -.826 4 -.826 4 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" /></svg>`
        },
        {
          name: "Boostrap",
          class: "boostrap",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z" /></svg>`
        }
      ],
      github: "",
      link: "https://balabamba-views.naguarasoftware.com/"
    },
    {
      title: "CHECKOUT PILLOFON",
      date: "2022",
      description: "Desarrollé una web desde cero como <b>herramienta de embudo</b> para captar clientes potenciales de manera rápida y sencilla. La web permite a los usuarios adquirir productos mediante formularios que <b>consultan API</b> externas para verificar los datos introducidos. Incluye una <b>calculadora de precios</b>, garantizando que el usuario complete el proceso con información precisa. El proyecto se desarrolló en Laravel, con Bootstrap y JavaScript.",      
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
      github: "",
      link: ""
    },
    {
      title: "Toi",
      date: "2023",
      description: "Desarrollé una <b>plantilla</b> desde cero para una ortopedia, diseñada para promocionar sus servicios en varios estados. La plantilla se creó con Angular como tecnología principal, Bootstrap para el diseño y se incluyeron animaciones con Animate.css en elementos selectos.",
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
          name: "Aos",
          class: "animatecss",
          ico: ""
        }
      ],
      github: "https://github.com/VnzlaRodo/toi-web",
      link: "https://demo-hotel.naguarasoftware.com"
    },
    {
      title: "Spanishando",
      date: "2024",
      description: "Tome participación en una web en WordPress para promocionar clases virtuales de español. La web utiliza el plugin <b>Amelia</b> para gestionar reservaciones. Se incluyó código JavaScript en ciertos elementos para garantizar su correcto funcionamiento con el entorno. El proyecto se me asigno para aplicar la nueva funcionalidad y además aplicar cambios de diseños varios.",
      images: {
        avatar: "./assets/img/proyectos/spanishando-avatar.jpg",
        desktop: [
          "./assets/img/proyectos/spanishando-1.jpg",
          "./assets/img/proyectos/spanishando-2.jpg",
          "./assets/img/proyectos/spanishando-3.jpg"
        ],
        mobile: [
          "./assets/img/proyectos/spanishando-mobile-1.jpg",
          "./assets/img/proyectos/spanishando-mobile-2.jpg"          
        ]
      },
      tags: [
        {
          name: "Wordpress",
          class: "wordpress",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-wordpress"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 9h3" /><path d="M4 9h2.5" /><path d="M11 9l3 11l4 -9" /><path d="M5.5 9l3.5 11l3 -7" /><path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>`
        },
        {
          name: "javascript",
          class: "javascript",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>`
        }
      ],
      github: "",
      link: "https://spanishando.com"
    },
    {
      title: "Tellmewhy",
      date: "2024",
      description: "Migré una web en WordPress desde un proyecto incompleto en Angular, con el propósito de ofrecer consultoría psicológica a distancia. Se implementó el plugin <b>Amelia</b> para la gestión de reservas y <b>javascript</b> personalizado como complemento para cumplir con los requerimientos del cliente.",
      images: {
        avatar: "./assets/img/proyectos/tellmewhy-avatar.jpg",
        desktop: [
          "./assets/img/proyectos/tellmewhy-1.jpg",
          "./assets/img/proyectos/tellmewhy-2.jpg",
          "./assets/img/proyectos/tellmewhy-3.jpg",
          "./assets/img/proyectos/tellmewhy-4.jpg",
          "./assets/img/proyectos/tellmewhy-5.jpg"
        ],
        mobile: [
          "./assets/img/proyectos/tellmewhy-mobile-1.jpg",
          "./assets/img/proyectos/tellmewhy-mobile-2.jpg",  
          "./assets/img/proyectos/tellmewhy-mobile-3.jpg",
          "./assets/img/proyectos/tellmewhy-mobile-4.jpg",
          "./assets/img/proyectos/tellmewhy-mobile-5.jpg"        
        ]
      },
      tags: [
        {
          name: "Wordpress",
          class: "wordpress",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-wordpress"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 9h3" /><path d="M4 9h2.5" /><path d="M11 9l3 11l4 -9" /><path d="M5.5 9l3.5 11l3 -7" /><path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>`
        },
        {
          name: "javascript",
          class: "javascript",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>`
        }
      ],
      github: "",
      link: "https://tellmewhy.es"
    },
    {
      title: "Lasemillaecoshop",
      date: "2022",
      description: "Desarrollé una web tipo <b>Ecommerce</b> en WordPress para una distribuidora de productos de belleza, empleando <b>WooCommerce</b> como plugin principal para la gestión de productos. Se implementaron estrategias básicas de <b>SEO</b> para mejorar la visibilidad del sitio en los motores de búsqueda.",
      images: {
        avatar: "./assets/img/proyectos/lasemilla-avatar.jpg",
        desktop: [
          "./assets/img/proyectos/lasemilla-1.jpg",
          "./assets/img/proyectos/lasemilla-2.jpg",
          "./assets/img/proyectos/lasemilla-3.jpg",
          "./assets/img/proyectos/lasemilla-4.jpg",
          "./assets/img/proyectos/lasemilla-5.jpg"
        ],
        mobile: [
                 
        ]
      },
      tags: [
        {
          name: "Wordpress",
          class: "wordpress",
          ico: `<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-wordpress"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.5 9h3" /><path d="M4 9h2.5" /><path d="M11 9l3 11l4 -9" /><path d="M5.5 9l3.5 11l3 -7" /><path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>`
        }
      ],
      github: "",
      link: ""
    }
  ];

  constructor() { }

  getExperiences(){
    return this.experiencia;
  }

  getProjects(){
    return this.proyectos;
  }
}
