import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public hero:Hero[] = [
    {
      name:'Superman',
      canFly: true,
      color: Color.red
    },
    {
      name:'Robin',
      canFly: true,
      color: Color.green
    },
    {
      name:'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name:'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name:'Thor',
      canFly: true,
      color: Color.blue
    },
    {
      name:'Black Panther',
      canFly: true,
      color: Color.black
    },

  ]

  toggleUppercase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }


}
