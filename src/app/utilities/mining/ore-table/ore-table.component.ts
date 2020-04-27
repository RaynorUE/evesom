import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OreTableService, OreTable } from '../../../services/api/utilities/ore-table.service';

@Component({
  selector: 'app-ore-table',
  templateUrl: './ore-table.component.html',
  styleUrls: ['./ore-table.component.scss']
})
export class OreTableComponent implements OnInit {

  testingData:Observable<any>;
  oreTable:OreTable;

  constructor(private OreTableSrv: OreTableService) { }


  ngOnInit(): void {
    this.testingData = this.testing();
    this.getTableData().subscribe();
  }

  getTableData(){
    console.log('getting ore table');
    return this.OreTableSrv.getTable().pipe(map((tableData) => {
      console.log('mapping ore table:', tableData);
      this.oreTable = tableData;
    }));
  }

  testing(): Observable<Array<object>>{

    return this.OreTableSrv.testing();
  }

}
