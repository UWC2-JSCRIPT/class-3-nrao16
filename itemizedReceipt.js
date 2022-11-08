// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...menuItems) => 
{ 
  const TAX_PERCENT = .02;
  const TIP_PERCENT = .2;
  let subTotal = 0;

  menuItems.forEach(item => { 
    subTotal += item.price
    console.log(`${item.descr} - $${item.price}`)
  });

  const tax = TAX_PERCENT * subTotal;
  const tip = TIP_PERCENT * subTotal;
  const totalPrice = subTotal + tax + tip; 
  console.log(`Subtotal - $${subTotal.toFixed(2)}`);
  console.log(`2% Tax - $${tax.toFixed(2)}`);
  console.log(`20% Tip - $${tip.toFixed(2)}`)
  console.log(`Total - $${totalPrice.toFixed(2)}`);
};

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
