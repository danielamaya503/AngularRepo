
// Generic Functions
//T es una forma de crear funciones que pueden trabajar con diferentes tipos de datos sin perder la información del tipo.
//La T es una convención, pero podríamos usar cualquier letra o nombre significativo como U, V, Type, etc.
export function whatMyType<T>( argument: T ): T{
    return argument;
}


//Usamos la función con diferentes tipos de datos
//<string> indica que el tipo de dato es string
let amIString = whatMyType<string>( 'Hola Mundo' );
let amINumber = whatMyType<number>( 100 );
let amIBoolean = whatMyType( [1,2,3,4,5] );

console.log(amIString.split(' '));
console.log(amINumber.toFixed(2));
console.log(amIBoolean.join('-'));

