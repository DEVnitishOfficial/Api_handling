
import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/products', (req,res) => {
    const products = [
        {
          "id": 1,
          "name": "Smartphone X",
          "price": 599.99,
          "image_url": "https://example.com/images/product1.jpg"
        },
        {
          "id": 2,
          "name": "Laptop Pro",
          "price": 999.99,
          "image_url": "https://example.com/images/product2.jpg"
        },
        {
          "id": 3,
          "name": "Wireless Headphones",
          "price": 149.99,
          "image_url": "https://example.com/images/product3.jpg"
        },
        {
          "id": 4,
          "name": "Coffee Maker",
          "price": 49.99,
          "image_url": "https://example.com/images/product4.jpg"
        },
        {
          "id": 5,
          "name": "Smartwatch",
          "price": 199.99,
          "image_url": "https://example.com/images/product5.jpg"
        },
        {
          "id": 6,
          "name": "Gaming Console",
          "price": 299.99,
          "image_url": "https://example.com/images/product6.jpg"
        },
        {
          "id": 7,
          "name": "4K TV",
          "price": 799.99,
          "image_url": "https://example.com/images/product7.jpg"
        },
        {
          "id": 8,
          "name": "Tablet Mini",
          "price": 199.99,
          "image_url": "https://example.com/images/product8.jpg"
        },
        {
          "id": 9,
          "name": "Bluetooth Speaker",
          "price": 79.99,
          "image_url": "https://example.com/images/product9.jpg"
        },
        {
          "id": 10,
          "name": "Camera DSLR",
          "price": 499.99,
          "image_url": "https://example.com/images/product10.jpg"
        },
        {
          "id": 11,
          "name": "Desk Chair",
          "price": 129.99,
          "image_url": "https://example.com/images/product11.jpg"
        },
        {
          "id": 12,
          "name": "External Hard Drive",
          "price": 89.99,
          "image_url": "https://example.com/images/product12.jpg"
        },
        {
          "id": 13,
          "name": "Portable Air Conditioner",
          "price": 349.99,
          "image_url": "https://example.com/images/product13.jpg"
        },
        {
          "id": 14,
          "name": "Blender",
          "price": 39.99,
          "image_url": "https://example.com/images/product14.jpg"
        },
        {
          "id": 15,
          "name": "Digital Watch",
          "price": 69.99,
          "image_url": "https://example.com/images/product15.jpg"
        },
        {
          "id": 16,
          "name": "Wireless Mouse",
          "price": 19.99,
          "image_url": "https://example.com/images/product16.jpg"
        },
        {
          "id": 17,
          "name": "Ebook Reader",
          "price": 129.99,
          "image_url": "https://example.com/images/product17.jpg"
        },
        {
          "id": 18,
          "name": "Smart Bulbs Kit",
          "price": 59.99,
          "image_url": "https://example.com/images/product18.jpg"
        },
        {
          "id": 19,
          "name": "Fitness Tracker",
          "price": 79.99,
          "image_url": "https://example.com/images/product19.jpg"
        },
        {
          "id": 20,
          "name": "Coffee Grinder",
          "price": 29.99,
          "image_url": "https://example.com/images/product20.jpg"
        }
      ]
// http:localhost:3000/api/products?search=Smartphone X

      if(req.query.search){
   const searchedProduct =  products.filter(product => product.name.includes(req.query.search));
   res.send(searchedProduct);
   return;
      }
     setTimeout(() => {
        res.send(products)
     },3000)
      
})

app.listen(port, () => {
console.log('server is running on',{port})
})