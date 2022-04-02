import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterTableComponent } from './router-table/router-table.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    RouterTableComponent
  ],
  imports:[ BrowserModule, AppRoutingModule, TableModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
