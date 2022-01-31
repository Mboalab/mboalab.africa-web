import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  state$: Observable<void>;

  private _state = new Subject<any>();

  constructor() {
    this.state$ = this._state.asObservable();
  }

  clearMenu(): void {
    // this._state.next();
  }
}