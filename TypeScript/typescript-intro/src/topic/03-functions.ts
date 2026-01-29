
// Funciones en TypeScript con tipado de parámetros y valor de retorno
function addNumbers(a: number, b: number){
    return a + b;
}

//Función flecha con tipado
const addNumbersArrow = (a: number, b: number) : string=> {
    // especificando que el valor de retorno es un string
    return `${a + b}`;
}

function multiply(firtsNumber:number, SecondNumber:number, base: number = 2){
    return firtsNumber * SecondNumber;
}

//llamando a la función y almacenando el resultado
/*
const result : number = addNumbers(1, 2);
const resultArrow : string = addNumbersArrow(1, 2);
const multiplyResult : number = multiply(2, 4);

console.log({result, resultArrow, multiplyResult});
*/

//creamos una interface para nuestro obejcto
interface  Character{
    name : string,
    hp:number,
    //tipo retorno
    showHp: () => void,
}

//character tendra la interfaz, donde se podra utilizar su informacion
const healCharacter = (character : Character, amount:number) => {

        let vidaReal : number = 0;

        if(character.hp >= 100){
            return;
        }else if(character.hp < 100){
            //min toma el numero mas pequeño (40,30), (40, 80) (40,1))
            vidaReal = Math.min(amount, 100 - character.hp);
        }
        character.hp += vidaReal;
}

//creamos un objecto strider de tipo interfaz creada Character
//debemos que crear sus variables
const strider : Character = {
    name : "Strider",
    hp: 80,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

//uyilizamos el metodo, como parametro character le enviamos nuestro objecto strider que cumple lo pedidio por la interfaz
healCharacter(strider, 40);
//con la funciom showHp llamamos para ver los puntos de vida
strider.showHp();

//hace que este archivo sea un modulo
export {};