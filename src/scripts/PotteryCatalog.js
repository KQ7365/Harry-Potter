let forSale = [];

export const toSellOrNotToSell = (pottery) => {
  if (pottery.cracked === true) {
    //pottery.price = 0;
    return pottery;
  } else if (pottery.weight >= 6) {
    pottery.price = 40;
  } else if (pottery.weight < 6) {
    pottery.price = 20;
  } else pottery.cracked === false;
  forSale.push(pottery);

  return pottery;
};

export const usePottery = () => {
  return forSale;
};
