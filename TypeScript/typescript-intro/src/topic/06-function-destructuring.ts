
//Interface para prodyctos
//cada producto tendra una descripcion y un precio
//export para poder usar la interfaz en otros archivos
export interface Product{
    description: string;
    price: number;
}

//Objecto para comprar un telefono usando la interfaz
/*const phone: Product = {
    description : `Samsung S22`,
    price: 500.00
}*/

//Objecto para comprar una tablet usando la interfaz
/*const tablet: Product = {
    description : `Samsung TAP5`,
    price: 700.90
}*/

//una innterfaz para calcular
interface TaxCalculateOptions{
    tax:number;
    products: Product[];
}

//----------Destructuring en los parametros de la funcion---------------------
//creamos un metodo donde option sea de tipo TaxCalculateOptions y la funcion retorne un number[]
//function taxCalculate(options : TaxCalculateOptions): [number, number] {
//function taxCalculate( {tax, products} : TaxCalculateOptions): [number, number] {
//export para usar la funcion en otros archivos
export function taxCalculate(options : TaxCalculateOptions): [number, number] {

    const {tax, products} = options;

    let total = 0;

    products.forEach( ({price}) => {
        total += price;
    });

    return  [total, total + tax];
}


//creamos el carrito de compras
//const shopingCart = [phone, tablet];
//const tax : number = 0.15;

//a la funcion le mandamos los parametros de la compra
/*const [total, taxTotal] = taxCalculate({
    products : shopingCart,
    tax: tax
});*/

//obtenemos resultado
//console.log(`Total `, total);
//console.log(`Total `, taxTotal);

