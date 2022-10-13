/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products ={},name = null,size = null) {
  for (const selectedProduct in products) {
      const product = products[selectedProduct];
      if (product.name === name) {
        if (product.availableSizes.includes(size)){
          return product
        }
      }
  }
    return null;
}  

function addProductToCart(product,cart = {}) {
  let {name,priceInCents} = product;
  if (!cart[name]){
    const productInfo = {priceInCents, quantity: 1}
    cart[name] = productInfo;
  } else {
    cart[name].quantity++// or you could have done cart[name].quantity = cart[name].quantity + 1
  }
  return cart
}



function calculateTotal(cart) {
  let total = 0;
  for (const currentItem in cart) {
    const item = cart[currentItem];
    total += (item.priceInCents * item.quantity);  
    }
    return total;
  }


  function printReceipt(cart) {
    const total = calculateTotal(cart);
    if (!total) return null;
  
    let result = "";
    for (let currentItem in cart) {
        const {quantity,priceInCents} = cart[currentItem];
        const amount = printablePrice(quantity*priceInCents);
        result += `${quantity}x${currentItem} - ${amount}\n`;
      }
      return result + `Total: ${printablePrice(total)}`;
    }

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
}