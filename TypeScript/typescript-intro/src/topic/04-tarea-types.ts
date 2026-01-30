
/*
    ===== Código de TypeScript =====
*/

interface  SuperHero{
    name: string,
    age: number,
    address: Addres,
    showAddress: () => string;
}

interface Addres{
    streed : string,
    country: string,
    city: string
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        streed: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() : string {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};