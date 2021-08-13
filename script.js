/* .js files add interaction to your website */
var factList = [
  "On average, nearly 20 people per minute are physically abused by an intimate partner in the United States. During one year, this equates to more than 10 million women and men",

  "On a typical day, there are more than 20,000 phone calls placed to domestic violence hotlines nationwide",

  "1 in 4 women and 1 in 7 men have been victims of severe physical violence (e.g. beating, burning, strangling) by an intimate partner in their lifetime",

  "45.4% of female rape victims and 29% of male rape victims were raped by an intimate partner",

  "19% of domestic violence involves a weapon",
  
  "1 in 3 women and 1 in 4 men have experienced some form of physical violence by an intimate partner, and 1 in 7 women and 1 in 25 men have been injured by an intimate partner",
  ];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
