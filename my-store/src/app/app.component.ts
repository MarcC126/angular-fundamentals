import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Marcos';
  age = 22;
  imgRandom = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Marc',
    age: 22,
    avatar: 'https://source.unsplash.com/random'
  };
  names: string[] = ['Marcos', 'Gery', 'Iris'];
  newName: string = '';
  products: Product[] = [
    {
      name: 'Buzz',
      price: 599,
      image: '../assets/images/buzz.jpg'
    },
    {
      name: 'Woody',
      price: 299,
      image: '../assets/images/woody.jpg'
    },
    {
      name: 'Rex',
      price: 511,
      image: '../assets/images/rex.jpeg'
    },
    {
      name: 'Buzz',
      price: 599,
      image: '../assets/images/buzz.jpg'
    },
    {
      name: 'Woody',
      price: 299,
      image: '../assets/images/woody.jpg'
    },
    {
      name: 'Rex',
      price: 511,
      image: '../assets/images/rex.jpeg'
    }
  ];
  widthImg = '10';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  registerUserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  dataSubmited = false;

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increseAge(){
    this.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addNameToList(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  registerUser(form: any): boolean{
    console.log(form.valid);
    if(!form.valid){
      console.log('Por favor, llena todos los campos');
      return false;
    }

    form.reset();
    console.log('¡Usuario registrado exitosamente');
    return true;
  }
}
