
//Un decorador es una funcion que se ejecuta cuando la clase es definida
//El decorador recibe como parametro el constructor de la clase

function decorador(
    constructor: any
){
    return class extends constructor{
        newProperty: string = 'New Property';
        hello: string = 'override';
    }
}

//declaramos el decorador
@decorador
export class SuperClass{

    public myProperty: string = 'Hello World';

    print(){
        console.log(this.myProperty);
    }

}

//Decorador que imprime el constructor de la clase
console.log( SuperClass );

const classInstance = new SuperClass();

console.log( classInstance);