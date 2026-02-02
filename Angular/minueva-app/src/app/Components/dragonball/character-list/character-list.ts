import { Component, Input, input } from '@angular/core';
import type { Character } from "../../../interfaces/character";

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
    //version 21 angular
    //characters = input.required<Character[]>();

  // version 19 PGR
   @Input({required: true}) characters!  : Character[];
   @Input({required: true}) listName!: string;

  //version 19 debo de aprender
  //@Input() xejemplo: string = '';
}
