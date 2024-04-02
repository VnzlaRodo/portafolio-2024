import { Component } from '@angular/core';
import { InfoService } from '../../../info.service';

@Component({
  selector: 'app-section-2',
  standalone: true,
  imports: [],
  templateUrl: './section-2.component.html',
  styleUrl: './section-2.component.scss'
})
export class Section2Component {

  info: any;
  
  constructor( private data:InfoService ){
      this.info = data.getExperiences();    
  }
}
