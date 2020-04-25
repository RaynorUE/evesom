import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APICoreService {

  private environmentAPIUrl = environment.baseAPIUrl;

  constructor() { }

  getBaseURL():string {

    return this.environmentAPIUrl + '/api';
  }
}
