import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'Alexander'
  edad = 33
  imagenSrc = 'https://source.unsplash.com/random'

  estadoBoton = false

  persona = {
    nombre: 'Alexander',
    edad: 33,
    avatar: 'https://source.unsplash.com/random',
  }

  inputEstado = false
  cantidad = 10

  inputNombre = ''

  estudiantes = ['Alex', 'Juan', 'Pedro']
  newName = ''

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/toy.jpg'
    }
  ]

  widthImg = 10;

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  register = {
    name: '',
    email: '',
    password: ''
  }

  activarDesactivar() {
    this.inputEstado = !this.inputEstado
  }

  aumentarCantidad() {
    this.cantidad++
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement
    console.log({ scrollTop: element.scrollTop })
  }

  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement
    // console.log({ value: element.value })
    this.inputNombre = element.value
  }

  addName() {
    this.estudiantes.push(this.newName)
    this.newName = ''
  }

  eliminarEstudiante( indice: number ) {
    this.estudiantes.splice(indice, 1)
  }

  onRegister() {
    console.log({
      register: this.register
    })
  }
}
