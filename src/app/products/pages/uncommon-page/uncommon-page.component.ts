import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name:string = 'Axel';
  public gender:'male' | 'female' = 'male';

  public invitationMap={
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Alejandra';
    this.gender = 'female';
  }


  public clients:string[] = ['Axel', 'Jorge', 'Robert', 'Chava', 'Karla', 'Karla U', 'Chino +', 'Chino -']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  public person = {
    'name': 'Axel',
    'age': 34,
    'country': 'México'
  }

  public myObservableTimer: Observable<number>= interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    },3500);
  })
}
