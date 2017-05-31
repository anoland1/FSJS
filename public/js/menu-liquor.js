

//LIQUOR PAGE

var d = new Date();
var n = d.getDay();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayRate = {Sunday:0.8, Monday:0.8, Tuesday:0.8, Wednesday:0.85,
  Thursday:0.9, Friday:1.2, Saturday:1.2};
var dayMultiplier = dayRate[day[n]];
var eventTime = 0;
var cocktailTime = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var bourbonTime = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.6, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var scotchTime = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.6, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var mixedTime = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var volcanoBasePrice = 7.55;
var mojitoBasePrice = 6.55;
var oldfashionedBasePrice = 7.2;
var martiniBasePrice = 6.15;
var woodfordBasePrice = 9.5;
var michtersBasePrice = 6.25;
var makersBasePrice = 5.6;
var pappyBasePrice = 14.4;
var rowansBasePrice = 6.1;
var wildturkeyBasePrice = 5.2;
var jwalkerBasePrice = 5.17;
var jackdanielsBasePrice = 5.22;
var scotch3BasePrice = 4.14;
var scotch4BasePrice = 4.62;
var gintonicBasePrice = 4.85;
var rumcokeBasePrice = 4.72;
var vodkasodaBasePrice = 4.62;
var whiskeycokeBasePrice = 4.57;
var today, h, m, s;
var secondsInHour, nextHour;
var volcanoPrice, mojitoPrice, oldfashionedPrice, martiniPrice, woodfordPrice, michtersPrice, makersPrice, pappyPrice, rowansPrice, wildturkeyPrice, jwalkerPrice, jackdanielsPrice, scotch3Price, scotch4Price, gintonicPrice, rumcokePrice, vodkasodaPrice, whiskeycokePrice;
var cocktailChange, bourbonChange, scotchChange, mixedChange;
var cocktailCurrent, bourbonCurrent, scotchCurrent, mixedCurrent;
var cocktailMultiplier, bourbonMultiplier, scotchMultiplier, mixedMultiplier;
var purchasePrice, finalPrice;
var itemQuantity = 1;
var s1 = "text";
var s2 = "price";
var s3 = "item";
var currentTab = 0;

function setTime () {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  secondsInHour = (m*60)+s;
  if (h===23) {nextHour=0} else {nextHour = h+1};
};

// ---------------- PRICE FUNCTIONS ------------------- //

function cocktailFunction() {
  setTime();
  cocktailChange = secondsInHour*(cocktailTime[h]-cocktailTime[nextHour])/3600;
  cocktailCurrent = cocktailTime[h]- cocktailChange;
  cocktailMultiplier = dayMultiplier*cocktailCurrent;
};
function bourbonFunction() {
  setTime();
  bourbonChange = secondsInHour*(bourbonTime[h]-bourbonTime[nextHour])/3600;
  bourbonCurrent = bourbonTime[h]- bourbonChange;
  bourbonMultiplier = dayMultiplier*bourbonCurrent;
};
function scotchFunction() {
  setTime();
  scotchChange = secondsInHour*(scotchTime[h]-scotchTime[nextHour])/3600;
  scotchCurrent = scotchTime[h]- scotchChange;
  scotchMultiplier = dayMultiplier*scotchCurrent;
};
function mixedFunction() {
  setTime();
  mixedChange = secondsInHour*(mixedTime[h]-mixedTime[nextHour])/3600;
  mixedCurrent = mixedTime[h]- mixedChange;
  mixedMultiplier = dayMultiplier*mixedCurrent;
};


// ------------------------ COCKTAILS INPUT PRICES ---------------------- //

function volcanoFunction() {
  cocktailFunction();
  volcanoPrice = cocktailMultiplier*volcanoBasePrice + eventTime;
  document.getElementById('volcano').innerHTML = "Fiery Volcano :  $" + volcanoPrice.toFixed(3);
};
function mojitoFunction() {
  cocktailFunction();
  mojitoPrice = cocktailMultiplier*mojitoBasePrice + eventTime;
  document.getElementById('mojito').innerHTML = "Mojito :  $" + mojitoPrice.toFixed(3);
};
function oldfashionedFunction() {
  cocktailFunction();
  oldfashionedPrice = cocktailMultiplier*oldfashionedBasePrice + eventTime;
  document.getElementById('old_fashioned').innerHTML = "Old Fashioned :  $" + oldfashionedPrice.toFixed(3);
};
function martiniFunction() {
  cocktailFunction();
  martiniPrice = cocktailMultiplier*martiniBasePrice + eventTime;
  document.getElementById('martini').innerHTML = "Martini :  $" + martiniPrice.toFixed(3);
};

/* ------------------------ BOURBON INPUT PRICES ---------------------- */

function woodfordFunction() {
  bourbonFunction();
  woodfordPrice = bourbonMultiplier*woodfordBasePrice + eventTime;
  document.getElementById('woodford_double').innerHTML = "Woodford Double Oaked :  $" + woodfordPrice.toFixed(3);
};
function michtersFunction() {
  bourbonFunction();
  michtersPrice = bourbonMultiplier*michtersBasePrice + eventTime;
  document.getElementById('michters').innerHTML = "Michter's :  $" + michtersPrice.toFixed(3);
};
function makersFunction() {
  bourbonFunction();
  makersPrice = bourbonMultiplier*makersBasePrice + eventTime;
  document.getElementById('makers').innerHTML = "Maker's Mark :  $" + makersPrice.toFixed(3);
};
function pappyFunction() {
  bourbonFunction();
  pappyPrice = bourbonMultiplier*pappyBasePrice + eventTime;
  document.getElementById('pappy_23').innerHTML = "Pappy 23 Year :  $" + pappyPrice.toFixed(3);
};
function rowansFunction() {
  bourbonFunction();
  rowansPrice = bourbonMultiplier*rowansBasePrice + eventTime;
  document.getElementById('rowans').innerHTML = "Rowan's Creek :  $" + rowansPrice.toFixed(3);
};
function wildturkeyFunction() {
  bourbonFunction();
  wildturkeyPrice = bourbonMultiplier*wildturkeyBasePrice + eventTime;
  document.getElementById('wild_turkey').innerHTML = "Wild Turkey :  $" + wildturkeyPrice.toFixed(3);
};

/* ------------------------ SCOTCH AND WHISKEY INPUT PRICES ----------------------*/

function jwalkerFunction() {
  scotchFunction();
  jwalkerPrice = scotchMultiplier*jwalkerBasePrice + eventTime;
  document.getElementById('johnnie_walker').innerHTML = "Johnnie Walker :  $" + jwalkerPrice.toFixed(3);
};
function jackdanielsFunction() {
  scotchFunction();
  jackdanielsPrice = scotchMultiplier*jackdanielsBasePrice + eventTime;
  document.getElementById('jack_daniels').innerHTML = "Jack Daniels :  $" + jackdanielsPrice.toFixed(3);
};
function scotch3Function() {
  scotchFunction();
  scotch3Price = scotchMultiplier*scotch3BasePrice + eventTime;
  document.getElementById('scotch3').innerHTML = "McLaren's Scotch :  $" + scotch3Price.toFixed(3);
};
function scotch4Function() {
  scotchFunction();
  scotch4Price = scotchMultiplier*scotch4BasePrice + eventTime;
  document.getElementById('scotch4').innerHTML = "Old Castle Scotch :  $" + scotch4Price.toFixed(3);
};

/* ------------------------ MIXED DRINKS INPUT PRICES ----------------------*/

function gintonicFunction() {
  mixedFunction();
  gintonicPrice = mixedMultiplier*gintonicBasePrice + eventTime;
  document.getElementById('gin_tonic').innerHTML = "Gin and Tonic :  $" + gintonicPrice.toFixed(3);
};
function rumcokeFunction() {
  mixedFunction();
  rumcokePrice = mixedMultiplier*rumcokeBasePrice + eventTime;
  document.getElementById('rum_coke').innerHTML = "Rum and Coke :  $" + rumcokePrice.toFixed(3);
};
function vodkasodaFunction() {
  mixedFunction();
  vodkasodaPrice = mixedMultiplier*vodkasodaBasePrice + eventTime;
  document.getElementById('vodka_soda').innerHTML = "Vodka Soda :  $" + vodkasodaPrice.toFixed(3);
};
function whiskeycokeFunction() {
  mixedFunction();
  whiskeycokePrice = mixedMultiplier*whiskeycokeBasePrice + eventTime;
  document.getElementById('whiskey_coke').innerHTML = "Whiskey and Coke :  $" + whiskeycokePrice.toFixed(3);
};


function autoUpdate() {
  volcanoFunction();
  mojitoFunction();
  oldfashionedFunction();
  martiniFunction();
  woodfordFunction();
  michtersFunction();
  makersFunction();
  pappyFunction();
  rowansFunction();
  wildturkeyFunction();
  jwalkerFunction();
  jackdanielsFunction();
  scotch3Function();
  scotch4Function();
  gintonicFunction();
  rumcokeFunction();
  vodkasodaFunction();
  whiskeycokeFunction();
};

setInterval (autoUpdate, 1000);

$("#menulist li").click(function() {
  $("#menulist ul").children().removeClass("itemselected");
  $("#menulist ul").children().css("border-bottom", "1px solid grey");
  $(this).parent().removeClass("invisible").addClass("itemselected");
  $(this).parent().prev().css("border-bottom", "none");
});

$(".orderbutton").on("click", function(){
  s1 = $(this).prev().text();
  s2 = s1.substring(s1.lastIndexOf('$') + 1);
  s3 = s1.substring(0, s1.indexOf(":"));
  purchasePrice = parseFloat(s2);
  $("#menulist").addClass("hidden");
  $("#purchaseOrder").removeClass("hidden");
  document.getElementById('selectedItem').innerHTML = s3;
  document.getElementById("quantity").innerHTML=itemQuantity;
  document.getElementById('selectedPrice').innerHTML = "Price: $" + purchasePrice.toFixed(2);
  document.getElementById('selectedTax').innerHTML = "Tax: $"+ (0.06*purchasePrice).toFixed(2);
  document.getElementById('selectedTotal').innerHTML = "Total: $"+ (1.06*purchasePrice).toFixed(2);
});
$("#quantitydown").on("click", function(){
    if (itemQuantity>=2) {itemQuantity-=1;};
    document.getElementById("quantity").innerHTML=itemQuantity;
    purchasePrice=parseFloat(s2)*itemQuantity;
    document.getElementById('selectedPrice').innerHTML = "Price: $" + purchasePrice.toFixed(2);
    document.getElementById('selectedTax').innerHTML = "Tax: $"+ (0.06*purchasePrice).toFixed(2);
    document.getElementById('selectedTotal').innerHTML = "Total: $"+ (1.06*purchasePrice).toFixed(2);
});
$("#quantityup").on("click", function(){
    itemQuantity+=1;
    document.getElementById("quantity").innerHTML=itemQuantity;
    purchasePrice=parseFloat(s2)*itemQuantity;
    document.getElementById('selectedPrice').innerHTML = "Price: $" + purchasePrice.toFixed(2);
    document.getElementById('selectedTax').innerHTML = "Tax: $"+ (0.06*purchasePrice).toFixed(2);
    document.getElementById('selectedTotal').innerHTML = "Total: $"+ (1.06*purchasePrice).toFixed(2);
});
$(".confirmOrder").on("click", function(){
    finalPrice = purchasePrice*1.06;
    currentTab += finalPrice;
    alert("You ordered " + itemQuantity + " " + s3 + "for $" + finalPrice.toFixed(2) + ".  Your order will be ready soon!");
    document.getElementById('bartab').innerHTML = "Current Tab :  $" + currentTab.toFixed(2);
    $("#purchaseOrder").addClass("hidden");
    $("#menulist").removeClass("hidden");
    itemQuantity=1;
    $("#menulist li").parents().removeClass("itemselected");
    $("#menulist ul").children().css("border-bottom", "1px solid grey");
});
$(".cancelOrder").on("click", function(){
    $("#purchaseOrder").addClass("hidden");
    $("#menulist").removeClass("hidden");
    itemQuantity=1;
});


//  THIS IS WHERE WE KEEP TRACK OF THE
//  BAR TAB
document.getElementById('bartab').innerHTML = "Current Tab :  $" + currentTab;
