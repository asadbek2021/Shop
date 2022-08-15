import { Injectable, InjectionToken } from '@angular/core';
import { IToken } from '../token.model';

@Injectable({
  providedIn: 'root'
})

export class ConstantsService {

  constructor() { }
}

export const TOKEN = new InjectionToken<IToken>('ConstantsService')
