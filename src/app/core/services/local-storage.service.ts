import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: any):void {
     window.localStorage.setItem(key, JSON.stringify(value));
  }
}

export const LocalStorageToken =  new InjectionToken<LocalStorageService>('localStorageService');

export const localStorageService = new LocalStorageService();
