/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let products = [
  {
    name: "Cherry",
    price: 2,
    quantity: 0,
    productId: 11,
    image: '../images/cherry.jpg'
  },
  {
    name: "Orange",
    price: 1.5,
    quantity: 0,
    productId: 22,
    image: '../images/orange.jpg'
  },
  {
    name: "Strawberry",
    price: 4,
    quantity: 0,
    productId: 33,
    image: '../images/strawberry.jpg'
  }
];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  let addedProduct;

  for (let product of products) {
    if (product.productId == productId) {
      addedProduct = product;
    }
  }

  if (!cart.includes(addedProduct)) {
    cart.push(addedProduct)
    addedProduct.quantity += 1;
  } else {
    addedProduct.quantity++;
  }

}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  cart.forEach((item) => {
    if (productId == item.productId) {
      item.quantity++;
    }
  });
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  cart.forEach((item, index) => {
    if (productId == item.productId) {
      if (item.quantity === 1) {
        item.quantity--;
        cart.splice(index, 1);
      } else {
        item.quantity--;
      }
    }
  });
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  cart.forEach((item, index) => {
    if (productId == item.productId) {
      item.quantity = 0;
      cart.splice(index, 1);
    }
  });
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
  let totalAmount = 0;

  products.forEach((product) => {
    totalAmount += product.quantity * product.price;
  });

  return totalAmount;
}


/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  products.forEach((product) => {
    removeProductFromCart(product.productId);
  });
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

let totalPaid = 0;
function pay(amount) {
  totalPaid += amount;
  const balance = totalPaid - cartTotal();

  if (balance >= 0) {
    totalPaid = 0;

    // To empty the cart, and returning the same amout if the user keeps entering values aferwards.  
    emptyCart();
  }

  return balance;
}


/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
