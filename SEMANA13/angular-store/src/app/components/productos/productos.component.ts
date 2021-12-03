import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  texto:string = "angular store";

  act:Array<string> = [
    "Ver películas",
    "Viajar",
    "Probar comida nueva",
    "Nadar",
    "Respirar",
    "Escuchar Música",
    "Salir a cenar",
  ]

   misProductos: Array<any> = [];
   subscripcionProdServ: Subscription = new Subscription;


  constructor(private _sProductos: ProductosService) { }
    getProductos() {
 this.subscripcionProdServ = this._sProductos
    .obtenerProductos()
    .subscribe((datos) => {
      this.misProductos = datos;
      console.log(datos);
    });
  }

  ngOnInit(): void {
    this.getProductos();
  }

}
