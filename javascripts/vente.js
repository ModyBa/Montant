//const prix=document.getElementById("product").value;
//const quantite=document.getElementById("number").value;

/*function calc() {
   // console.log(document.getElementById("product").value);
   const prix=document.getElementById("product").value;
    const quantite=document.getElementById("number").value;
   alert(prix*quantite);
}*/
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");


let purchases = [];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
 
 
  let purchase = {
    price: price,
    number: number,
  
  };
  purchases.push(purchase);
  window.alert(`${display()}\n小計${subtotal()}円`);
  
}
function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].price}円が${purchases[i].number}点\n`;
  }
  return string;
}

function subtotal() {
    let sum = 0;
      for(let i=0; i<purchases.length; i++){
      sum += purchases[i].price * purchases[i].number;
    }
    return sum;
  }
  

function calc() {
  let sum = 0;
  for(let index = 0; index < purchases.length; index++) {
    sum += purchases[index].price * purchases[index].number;
  }
  window.alert(`le total est ${sum} yens`);
 
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
  

}
function calc() {
    const sum = subtotal();
    const frais = calcPostageFromPurchase(sum);
    window.alert(`le sous-total est ${sum}円、送料は${postage}円です。合計は${sum + frais}円です`);
    purchases = [];
    priceElement.value= "";
    numberElement.value = "";
   
  }
  
  function calcPostageFromPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
      return 0;
    } else if (sum >= 2000){
     return 250;
    } else {
     return 500;
    }
  }
