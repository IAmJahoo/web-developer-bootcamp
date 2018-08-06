let faker = require('faker');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

for(let i=0; i<10; i++) {
    console.log(new Product(faker.commerce.productName(), faker.commerce.price()))
}