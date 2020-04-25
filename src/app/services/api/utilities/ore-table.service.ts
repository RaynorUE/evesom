import { Injectable } from '@angular/core';
import { APICoreService } from '../apicore.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OreTableService {

  constructor(
    private APICore:APICoreService,
    private http: HttpClient
    ) { }

  testing(): Observable<Array<object>>{
    var resourcePath = '/ore-table/testing';
    var endpoint = this.APICore.getBaseURL() + resourcePath;
    
    return this.http.get<Array<object>>(endpoint);

  }
}
