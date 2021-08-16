import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {


  cartSubject = new Subject<any>();

  constructor() { }
}
