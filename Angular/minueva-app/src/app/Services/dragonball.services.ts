
import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const character = localStorage.getItem(`character`);

  return character ? JSON.parse(character) : [];
}

@Injectable({providedIn: "root"})
export class DragonballServices {

  //llamar a nuestro getItem de localStorage
  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacters(newCharacter: Character) {
    //forma en que un componente recibe datos externos
    this.characters.update((list) => [...list, newCharacter])
  }

  //Guuardar nuestra informacion en memoria (solo este navegador)
  saveToLocalStorage = effect( () => {
    //debemos que nuestro objecto crearlo como JSON STRING
    localStorage.setItem(`Character`, JSON.stringify(this.characters()) );
  })

}

//DI Dependence Injection
