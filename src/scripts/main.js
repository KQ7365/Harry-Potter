import { makePottery } from "./PotteryWheel.js";
import { pieceOfPottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { usePottery } from "./PotteryCatalog.js";

pieceOfPottery;
// Make 5 pieces of pottery at the wheel
let pottery1 = makePottery("skinny", 5, 7);
let pottery2 = makePottery("fat", 3, 8);
let pottery3 = makePottery("roundish", 2, 4);
let pottery4 = makePottery("square", 8, 2);
let pottery5 = makePottery("brittle", 2, 4);

//console.log(pieceOfPottery);

// Fire each piece of pottery in the kiln
firePottery(pottery1, 2300);
firePottery(pottery2, 1100);
firePottery(pottery3, 2300);
firePottery(pottery4, 1900);
firePottery(pottery5, 2300);

//console.log(pieceOfPottery);

// Determine which ones should be sold, and their price
toSellOrNotToSell(pottery1);
toSellOrNotToSell(pottery2);
toSellOrNotToSell(pottery3);
toSellOrNotToSell(pottery4);
toSellOrNotToSell(pottery5);

const usePotteryFunc = usePottery();
//console.log(pieceOfPottery);
console.log(usePotteryFunc);
// Invoke the component function that renders the HTML list
