import { Injectable } from '@angular/core';
//es la herramienta para hacer peticiones
import { HttpClient}  from '@angular/common/http';
//Observable es la manera que se va enviar el resultado de mis peticiones
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url:string = "https://616b5eb316c3fa0017171686.mockapi.io/productos";

  //inyeccion por dependencias
  constructor(private _Http:HttpClient) { }

  obtenerProductos():Observable<any>{
    return this._Http.get(this.url);
  }
}
