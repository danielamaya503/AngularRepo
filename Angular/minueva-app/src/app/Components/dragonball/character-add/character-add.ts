import {Component, EventEmitter, Input, output, Output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})

export class CharacterAdd {
    // @ts-ignore
  addCharacters() {
      if(!this.name || !this.power() || this.power() < 0){
        return;
      }

      const newCharacter : Character = {
        id: Math.floor(Math.random() * 1000),
        name: this.name(),
        power: this.power(),
      };

      //actyalizar lista a todas las señales
      /*this.characters.update(
        (list) => [... list, newCharacter]
      )*/
      this.newCharacter.emit(newCharacter);
      this.resetData();
    }

  resetData(){
    this.name.set("");
    this.power.set(0);
  }

    name = signal("");
    power = signal(0);

    //version 21 ---angular---
    //newCharacter = output<Character>()

   //version 19  ---angular---
   @Output() newCharacter = new EventEmitter<Character>;
}
