const TAX_RATE = .08;
const BANK_BLANCE = 500;
const ACCESSORIES_PRICE = 90;
const PHONE_PRICE = 150;

var amount = 0;

function getPriceInFormat(){
  return "$" + amount.toFixed(2);
}

function calculaTetaxRate(amount){
  return amount * TAX_RATE;
}
function errorPhoneMsg(){
  console.log("You can't afford this Phone purchase.");
}

function errorAccessoriesMsg(){
  console.log("You can't afford this Accessories purchase.");
}

function purchase(){
  while(amount < BANK_BLANCE){
    if(amount + PHONE_PRICE + calculaTetaxRate(amount + PHONE_PRICE) > BANK_BLANCE){
      errorPhoneMsg();
      return;
    }
    else{
      amount += PHONE_PRICE;
      if(amount + ACCESSORIES_PRICE + calculaTetaxRate(amount + ACCESSORIES_PRICE) > BANK_BLANCE){
        errorAccessoriesMsg();
        return;
      }
      else{
        amount += ACCESSORIES_PRICE;
      }
    }
  }
}

purchase();
amount += calculaTetaxRate(amount);
amount  = getPriceInFormat();
console.log("Your Total Purchase Is: "+ amount);
