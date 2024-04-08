import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-5',
  standalone: true,
  imports: [],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.scss'
})
export class Section5Component {

  constructor(private http: HttpClient) {}

  downloandCv() {
    const url = './assets/CV.pdf'; // Ejemplo: './assets/ejemplo.pdf'
    this.http.get(url, { responseType: 'blob' }).subscribe((data: any) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const urlArchivo = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = urlArchivo;
      anchor.download = 'CV.pdf'; // Nombre deseado para el archivo
      anchor.click();
      window.URL.revokeObjectURL(urlArchivo);
    });
  }

}
