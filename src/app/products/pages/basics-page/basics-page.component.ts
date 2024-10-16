import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'axel';
  public nameUpper: string = 'AXEL';
  public fullName: string = 'aXeL MarTiNeZ';

  public customDate: Date = new Date();
}
