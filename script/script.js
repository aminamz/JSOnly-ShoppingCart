const soap = 14;
const shampoo = 12;
const cloth = 40;
const balance = 100;

const totalPriceInCart = soap + shampoo + cloth * 2;
const averagePrice = totalPriceInCart / 4;
const PriceAfterDiscount = totalPriceInCart * 0.95;

console.log(`The Price of Cart is : ${totalPriceInCart}`);
console.log(`The Average Price is : ${averagePrice}`);
console.log(`The Price After 5% off : ${PriceAfterDiscount}`);

console.log(
  balance >= PriceAfterDiscount
    ? "Customer Can Buy the Whole Cart"
    : "Customer Does not Have Efficient Balance"
);

//****************************************** Advance Defining Product => *****************/

// const product = [
//   { title: "soap", price: 14 },
//   { title: "shampoo", price: 12 },
//   { title: "cloth", price: 40 },
// ];

// const balance = 100;

// const productInCart = [
//   { product: product[0].title, count: 1, price: product[0].price },
//   { product: product[1].title, count: 1, price: product[1].price },
//   { product: product[2].title, count: 2, price: product[2].price },
// ];

// const totalPriceInCart =
//   productInCart[0].price * productInCart[0].count +
//   productInCart[1].price * productInCart[1].count +
//   productInCart[2].price * productInCart[2].count;

// const averagePrice =
//   totalPriceInCart /
//   (productInCart[0].count + productInCart[1].count + productInCart[2].count);

// const PriceAfterDiscount = totalPriceInCart * 0.95;
// console.log(`The Price of Cart is : ${totalPriceInCart}`);
// console.log(`The Average Price is : ${averagePrice}`);
// console.log(`The Price After 5% off : ${PriceAfterDiscount}`);

// console.log(
//   balance >= PriceAfterDiscount
//     ? "Customer Can Buy the Whole Cart"
//     : "Customer Does not Have Efficient Balance"
// );
