

//FOOD PAGE

var d = new Date();
var n = d.getDay();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayRate = {Sunday:0.8, Monday:0.8, Tuesday:0.8, Wednesday:0.85,
  Thursday:0.9, Friday:1.2, Saturday:1.2};
var dayMultiplier = dayRate[day[n]];
var eventTime = 0;
var meatTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var cheeseTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var nutsTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var spreadTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var meat1BasePrice = 13.55; // assortment of cured meats
var meat2BasePrice = 17.95; // wagyu jerky
var meat3BasePrice = 9.10; // Kentucky ham
var meat4BasePrice = 9.51; // Bacon sampler
var cheese1BasePrice = 12.55; // cheese sampler
var cheese2BasePrice = 7.45; // spanish goat cheese
var cheese3BasePrice = 5.55; // wisconsin cheddar
var cheese4BasePrice = 6.25; // french brie
var nuts1BasePrice = 7.45; // assortment of nuts
var nuts2BasePrice = 9.45; // dried mango et al
var nuts3BasePrice = 10.23; // Macadamian nuts and almonds
var nuts4BasePrice = 9.94; // dried berry sampler
var spread1BasePrice = 5.44; // pimento and crackers
var spread2BasePrice = 6.54; // vegetables and benedictine
var spread3BasePrice = 14.44; // null
var spread4BasePrice = 14.44; // null
var today, h, m, s;
var secondsInHour, nextHour;
var meat1Price, meat2Price, meat3Price, meat4Price, cheese1Price, cheese2Price, cheese3Price, cheese4Price, nuts1Price, nuts2Price, nuts3Price, nuts4Price, spread1Price, spread2Price, spread3Price, spread4Price;
var meatChange, cheeseChange, nutsChange, spreadChange;
var meatCurrent, cheeseCurrent, nutsCurrent, spreadCurrent;
var meatMultiplier, cheeseMultiplier, nutsMultiplier, spreadMultiplier;
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

function meatFunction() {
  setTime();
  meatChange = secondsInHour*(meatTime[h]-meatTime[nextHour])/3600;
  meatCurrent = meatTime[h]- meatChange;
  meatMultiplier = dayMultiplier*meatCurrent;
};
function cheeseFunction() {
  setTime();
  cheeseChange = secondsInHour*(cheeseTime[h]-cheeseTime[nextHour])/3600;
  cheeseCurrent = cheeseTime[h]- cheeseChange;
  cheeseMultiplier = dayMultiplier*cheeseCurrent;
};
function nutsFunction() {
  setTime();
  nutsChange = secondsInHour*(nutsTime[h]-nutsTime[nextHour])/3600;
  nutsCurrent = nutsTime[h]- nutsChange;
  nutsMultiplier = dayMultiplier*nutsCurrent;
};
function spreadFunction() {
  setTime();
  spreadChange = secondsInHour*(spreadTime[h]-spreadTime[nextHour])/3600;
  spreadCurrent = spreadTime[h]- spreadChange;
  spreadMultiplier = dayMultiplier*spreadCurrent;
};


// ------------------------ MEATS INPUT PRICES ---------------------- //

function meat1Function() {
  meatFunction();
  meat1Price = meatMultiplier*meat1BasePrice + eventTime;
  document.getElementById('meat1').innerHTML = "Assortment of Cured Meats :  $" + meat1Price.toFixed(2);
};
function meat2Function() {
  meatFunction();
  meat2Price = meatMultiplier*meat2BasePrice + eventTime;
  document.getElementById('meat2').innerHTML = "Wagyu Beef Jerky :  $" + meat2Price.toFixed(2);
};
function meat3Function() {
  meatFunction();
  meat3Price = meatMultiplier*meat3BasePrice + eventTime;
  document.getElementById('meat3').innerHTML = "Kentucky Farm Fresh Ham :  $" + meat3Price.toFixed(2);
};
function meat4Function() {
  meatFunction();
  meat4Price = meatMultiplier*meat4BasePrice + eventTime;
  document.getElementById('meat4').innerHTML = "Bacon Sampler :  $" + meat4Price.toFixed(2);
};

// ------------------------ CHEESE INPUT PRICES ---------------------- //

function cheese1Function() {
  cheeseFunction();
  cheese1Price = cheeseMultiplier*cheese1BasePrice + eventTime;
  document.getElementById('cheese1').innerHTML = "Assortment of Cheeses :  $" + cheese1Price.toFixed(2);
};
function cheese2Function() {
  cheeseFunction();
  cheese2Price = cheeseMultiplier*cheese2BasePrice + eventTime;
  document.getElementById('cheese2').innerHTML = "Spanish Goat Cheese :  $" + cheese2Price.toFixed(2);
};
function cheese3Function() {
  cheeseFunction();
  cheese3Price = cheeseMultiplier*cheese3BasePrice + eventTime;
  document.getElementById('cheese3').innerHTML = "Wisconsin Aged Cheddar :  $" + cheese3Price.toFixed(2);
};
function cheese4Function() {
  cheeseFunction();
  cheese4Price = cheeseMultiplier*cheese4BasePrice + eventTime;
  document.getElementById('cheese4').innerHTML = "French Brie :  $" + cheese4Price.toFixed(2);
};


// ------------------------ FRUIT AND NUTS INPUT PRICES ---------------------- //

function nuts1Function() {
  nutsFunction();
  nuts1Price = nutsMultiplier*nuts1BasePrice + eventTime;
  document.getElementById('nuts1').innerHTML = "Assortment of Nuts :  $" + nuts1Price.toFixed(2);
};
function nuts2Function() {
  nutsFunction();
  nuts2Price = nutsMultiplier*nuts2BasePrice + eventTime;
  document.getElementById('nuts2').innerHTML = "Dried Mango, Apricots and Peaches :  $" + nuts2Price.toFixed(2);
};
function nuts3Function() {
  nutsFunction();
  nuts3Price = nutsMultiplier*nuts3BasePrice + eventTime;
  document.getElementById('nuts3').innerHTML = "Macadamian Nuts and Almonds :  $" + nuts3Price.toFixed(2);
};
function nuts4Function() {
  nutsFunction();
  nuts4Price = nutsMultiplier*nuts4BasePrice + eventTime;
  document.getElementById('nuts4').innerHTML = "Dried Strawberries, Cherries, and Blueberries :  $" + nuts4Price.toFixed(2);
};

// ------------------------ SPREADS INPUT PRICES ---------------------- //

function spread1Function() {
  spreadFunction();
  spread1Price = spreadMultiplier*spread1BasePrice + eventTime;
  document.getElementById('spread1').innerHTML = "Herb Crackers and Pimento :  $" + spread1Price.toFixed(2);
};
function spread2Function() {
  spreadFunction();
  spread2Price = spreadMultiplier*spread2BasePrice + eventTime;
  document.getElementById('spread2').innerHTML = "Fresh Carrots, Celery and Benedictine :  $" + spread2Price.toFixed(2);
};

function autoUpdate() {
  meat1Function();
  meat2Function();
  meat3Function();
  meat4Function();
  cheese1Function();
  cheese2Function();
  cheese3Function();
  cheese4Function();
  nuts1Function();
  nuts2Function();
  nuts3Function();
  nuts4Function();
  spread1Function();
  spread2Function();
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
