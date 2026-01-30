
//Definimos una clase
export class Person{    
    public firtsName: string;
    public lastName: string;
    public address: string;

    constructor(
        firtsName: string, 
        lastName: string,
        address: string = "No Address"
    ){
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.address = address;
    }

}

//Herencia de la clase Person
//composicion de clases
export class Hero{

    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor(
        alterEgo: string,
        age: number,
        realName: string,
        person: Person
    ){
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
        this.person = person;
    }
}

//Usamos la clase para crear un objeto
const tony = new Person("Tony", "Starck", "New York");

//Usamos la clase para crear un objeto
//llamamos a hero y le pasamos como parametro el objeto tony
const ironman = new Hero("Ironman", 45, "Tony", tony);

//Modificamos las propiedades del objeto
//ironman.name = "Tony Stark";
//ironman.address = "Malibu, California";

console.log(ironman);