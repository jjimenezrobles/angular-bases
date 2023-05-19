import { Component, OnInit } from '@angular/core';
import { dbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent  {

  constructor( private dbzServices: dbzService){}


  public get characters() : Character[] {
    return [...this.dbzServices.characters];
  }

  deleteCharacterById( id:string): void{
    this.dbzServices.deleteCharacterById(id);
  }

  addCharacter( character:Character):void{
    this.dbzServices.addCharacter(character);
  }
}
