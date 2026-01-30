
export interface Passeger{
    name: string;
    children?: string[];
}

const pasajero1: Passeger = {
    name: "Alejandro"
}

const pasajero2: Passeger = {
    name: "Daniel",
    children: ["Sasha", "Kaiser"]
}

const child = (passeger : Passeger) => {
    const howmany = passeger.children?.length || 0 ;
    console.log(passeger.name, howmany);   
}

child(pasajero1);
child(pasajero2);