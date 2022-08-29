import { Injectable } from '@angular/core';
import { IConfig } from '../config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private _config: IConfig = {email: '',id: '',login: ''};

  constructor() { }

  getConfig(){
    return this._config
  }

  setConfig(config: IConfig){
    this._config = { ...this._config, ...config };
  }

  setConfigProperty(key: keyof IConfig, value: any) {
    this._config[key] = value;
  }
}
