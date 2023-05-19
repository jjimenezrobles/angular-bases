import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public CharacterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(uuid:string):void{
    console.log(uuid);
    this.onDelete.emit(uuid);
  }
}
