import { taxCalculate, type Product } from './06-function-destructuring';



const shopingCart : Product[] = [
    {
        description: 'Samsung S22',
        price: 2000
    },
    {
        description: 'Iphone 14',
        price: 1200
    }
]; 

//tax 0.15
const [total, tax] = taxCalculate({
    products: shopingCart,
    tax: 0.15
});

console.log('Total:', total);
console.log('Tax:', tax);