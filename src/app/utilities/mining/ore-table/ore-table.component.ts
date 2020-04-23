import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ore-table',
  templateUrl: './ore-table.component.html',
  styleUrls: ['./ore-table.component.scss']
})
export class OreTableComponent implements OnInit {

  testingData:Observable<any>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.testingData = this.testing();
  }

  getTableData(): void{

  }

  testing(): Observable<Array<object>>{

    return this.http.get<Array<Object>>('/api/ore-table/testing')
  }

}
