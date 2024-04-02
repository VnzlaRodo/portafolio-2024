import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  ngOnInit(): void {
   /* window.addEventListener("scroll", ()=>{
      var navbar = document.querySelector("nav");
      navbar?.classList.toggle("sticky", window.scrollY > 100);
    })*/
  }
}
