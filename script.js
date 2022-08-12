var factList = [
  "Since the pandemic started, homelessness rates have increased up to 35% in main Bay Area cities. (via SF Chronicle)",
  "Being homeless makes people more prone to diseases, addiction, and mental illnesses.",
  "Cities with high homelessness rates draw away customers which can negativley impact local businesses." 
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton){
  myButton.addEventListener("click",displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count ++;
  if (count== factList.length){
    count = 0;
  }
}
