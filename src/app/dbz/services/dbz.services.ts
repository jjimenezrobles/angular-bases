import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class dbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 500
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Jaime',
    power: 200000
  }]

  addCharacter( character:Character):void{
    const newCharacter:Character = {...character, id: uuid()}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index:number): void{
  //   const itemDelete:Character [] = this.characters.splice(index, 1);
  //   console.log(itemDelete);
  // }

  deleteCharacterById( id:string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
