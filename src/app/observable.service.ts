import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  $modal = new EventEmitter<any>();
  $itemModal = new EventEmitter<any>();

  constructor() { }
}
