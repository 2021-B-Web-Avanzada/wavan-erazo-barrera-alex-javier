import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {
  mostrarSegundoBanner = false;

  arregloUsuarios = [
    {
      id:1,
      nombre: 'Javier',
      color: '#00BCFF',
      link: 'https://www.facebook.com/',
      linkImagen: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800'
    },
    {
      id:2,
      nombre: 'Alex',
      color: '#007AFF',

      link: 'https://www.epn.edu.ec',
      linkImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lvNtwu7ISQY-jxkuWaWLtrW0muQxGrNKRT4Y_GLsVZLecvtw0FAoohnJf3pamXvf-hI&usqp=CAU'
    }

  ]



  constructor() { }

  ngOnInit(): void {
  }


  cambiarOcultarBanner(){
    this.mostrarSegundoBanner = !this.mostrarSegundoBanner;
  }

}
