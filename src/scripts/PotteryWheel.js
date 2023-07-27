export let pieceOfPottery = [];
let id = 1;

export const makePottery = (shape, weight, height) => {
  const pottery = {
    id: id,
    shape: shape,
    weight: weight,
    height: height,
  };
  pieceOfPottery.push(pottery);
  id++;
};
//*Function above creates object, and adds id variable that "counts"
// * each time new object is made
