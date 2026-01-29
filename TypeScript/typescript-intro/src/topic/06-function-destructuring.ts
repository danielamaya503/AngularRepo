
//Interface para prodyctos
interface Product{
    description: string;
    price: number;
}

//Objecto para comprar un telefono usando la interfaz
const phone: Product = {
    description : `Samsung S22`,
    price: 500.00
}

//Objecto para comprar una tablet usando la interfaz
const tablet: Product = {
    description : `Samsung TAP5`,
    price: 700.90
}

//una innterfaz para calcular
interface TaxCalculateOptions{
    tax:number;
    products: Product[];
}

//creamos un metodo donde option sea de tipo TaxCalculateOptions y la funcion retorne un number[]
function taxCalculate(options : TaxCalculateOptions):number[] {

    let total = 0;

    options.products.forEach(product=> {
        total += product.price;
    });

    return  [total, total + options.tax];
}


//creamos el carrito de compras
const shopingCart = [phone, tablet];
const tax : number = 0.15;

//a la funcion le mandamos los parametros de la compra
const result = taxCalculate({
    products : shopingCart,
    tax
});

//obtenemos resultado
console.log(`Total `, result[0]);
console.log(`Total `, result[1]);



export {};