import {Component, inject, signal} from '@angular/core';
import {CharacterList} from '../../Components/dragonball/character-list/character-list';
import {CharacterAdd} from '../../Components/dragonball/character-add/character-add';
import {Character} from '../../interfaces/character';
import {DragonballServices} from '../../Services/dragonball.services';
//import {NgClass} from '@angular/common';



@Component({
  templateUrl: "dragonball-super-page.component.html",
  imports: [
    CharacterList,
    CharacterAdd,
  ],
  selector: `dragonball-super`
})

export class DragonballSuperPageComponent {
  //-----INYECCCION DE DEPENCIAS (SERVICES)----
  /*constructor(
    public dragonballService : DragonballServices
  ) {
  }*/

  //forma de inyeccion de dependecia angular/core
  public dragonballService = inject(DragonballServices);


  /*powerClass = computed( () => {
    return {
      "text-danger": true,
    }
  })
  */
  protected readonly CharacterList = CharacterList;
}
