import { usePottery } from "./PotteryCatalog.js";
let forSale = usePottery();

export const PotteryList = () => {
  let htmlString = ``;
  for (const Items of forSale) {
    htmlString += `<section class="pottery" id="pottery--${Items.id}">
    <h2 class="pottery__shape">${Items.shape}</h2>
    <div class="pottery__properties">
      Item weighs ${Items.weight} grams and is ${Items.height} cm in height
    </div>
    <div class="pottery__price">Price is $${Items.price}</div></section>`;
  }

  return htmlString;
};

// export const PotteryList = (forSale) => {
//     let htmlString = `<article class="potteryList">`;

//     for (const Items of forSale) {
//       htmlString += `<section class="pottery" id="pottery--1">
//       <h2 class="pottery__shape">Mug${Items.shape}</h2>
//       <div class="pottery__properties">
//         Item weighs ${Items.weight} grams and is ${Items.height} cm in height
//       </div>
//       <div class="pottery__price">Price is $${Items.price}</div>
//     </section>`;
//     }
//     htmlString += "</article>";

//     return htmlString;
//   };
