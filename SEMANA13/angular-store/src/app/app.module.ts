import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CommonModule } from '@angular/common';
import { CardprodComponent } from './components/cardprod/cardprod.component';
@NgModule({
  declarations: [
    AppComponent,    
    ProductosComponent, CardprodComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
