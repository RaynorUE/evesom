import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OreTableComponent } from './utilities/mining/ore-table/ore-table.component';
import { HttpClientModule } from '@angular/common/http';
import { APICoreService } from './services/api/apicore.service';
import { OreTableService } from './services/api/utilities/ore-table.service';

@NgModule({
  declarations: [
    AppComponent,
    OreTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [APICoreService, OreTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
