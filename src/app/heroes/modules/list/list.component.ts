import { Component } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'ironman', 'Hulk', 'Thor', 'antman'];
  public deleteHero?:string;

  deleteLastHero():void{
    this.deleteHero = this.heroNames.pop();
  }
}
