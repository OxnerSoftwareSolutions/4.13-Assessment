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
let products = [
	{
		name: "Court Sneaker",
		priceInCents: 9800,
		availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
	},
	{
		name: "Relaxed Silk Shirt",
		priceInCents: 9800,
		availableSizes: [0, 10, 12, 2],
	},
	{
		name: "Square-Neck Jumpsuit",
		priceInCents: 8800,
		availableSizes: [6, 10, 14, 2, 12],
	},
];
function printablePrice(priceInCents) {
	const amount = (priceInCents / 100).toFixed(2);
	return `$${amount}`;
}
function chooseItemByNameAndSize(products, name, size) {
	let result = products.find((productObj) => {
		if (productObj.name === name && productObj.availableSizes.includes(size)) {
			return productObj;
		}
	});
	return result ? result : null;
}
function addProductToCart(product, cart = {}) {}
function calculateTotal(cart) {}

function printReceipt(cart) {}

module.exports = {
	chooseItemByNameAndSize,
	addProductToCart,
	calculateTotal,
	printReceipt,
};
