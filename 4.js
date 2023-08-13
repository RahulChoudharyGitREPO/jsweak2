function checkResults(products) {
    products.forEach(product => {
        if (product.price >= 16000) {
            console.log(`The product with maximum amount is laptop ${product.name}!`);
        } else if (product.price <= 1000) {
            console.log(`The product with lowest amount is phone ${product.name}!`);
        }
    });
}

const products = [
    { name: "Laptop", price: 18000 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 1500 }
];

checkResults(products);
