
(function(){
//WINE PAGE

var d = new Date();
var n = d.getDay();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayRate = {Sunday:0.8, Monday:0.8, Tuesday:0.8, Wednesday:0.85,
  Thursday:0.9, Friday:1.2, Saturday:1.2};
var dayMultiplier = dayRate[day[n]];
var eventTime = 0;
var redTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var whiteTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var champagneTime = [0.8, 0.85, 0.9, 1.0, 1.1, 1.0, 0.6, 0.5, 0.6, 1.0, 1.2, 1.3,
    1.5, 1.45, 1.3, 1.2, 1.1, 1.2, 1.5, 1.7, 1.6, 1.5, 1.3, 1.0];
var red1BasePrice = 13.55; // 2015 Sonoma County Merlot
var red2BasePrice = 27.95; // 2012 California Cabernet
var red3BasePrice = 49.10; // 2013 French Burgundy
var red4BasePrice = 29.51; // 2014 Spanish Syrah
var red5BasePrice = 13.55; // 2015 Orange County Pinot Noir
var red6BasePrice = 27.95; // 2013 French Cabernet
var red7BasePrice = 39.10; // 2011 French Pinot Noir
var red8BasePrice = 39.51; // 2010 Napa Merlot
var white1BasePrice = 15.52; // 2015 Sonoma County Chardonnay
var white2BasePrice = 26.94; // 2012 California Pinot Gris
var white3BasePrice = 55.13; // 2013 French Sauvignon Blanc
var white4BasePrice = 25.52; // 2014 Spanish Riesling
var white5BasePrice = 15.53; // 2015 Orange County Riesling
var white6BasePrice = 23.94; // 2013 French Chardonnay
var white7BasePrice = 31.12; // 2011 French Pinot Gris
var white8BasePrice = 15.53; // 2010 Napa Sauvignon Blanc
var champagne1BasePrice = 15.53; // 2015 Andre
var champagne2BasePrice = 27.93; // 2013 Churchill
var champagne3BasePrice = 49.12; // 2011 Moet
var champagne4BasePrice = 59.53; // 2010 Moet
var today, h, m, s;
var secondsInHour, nextHour;
var red1Price, red2Price, red3Price, red4Price, red5Price, red6Price, red7Price, red8Price, white1Price, white2Price, white3Price, white4Price, white5Price, white6Price, white7Price, white8Price, champagne1Price, champagne2Price, champagne3Price, champagne4Price;
var redChange, whiteChange, champagneChange;
var redCurrent, whiteCurrent, champagneCurrent;
var redMultiplier, whiteMultiplier, champagneMultiplier;
var purchasePrice, finalPrice;

function setTime () {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  secondsInHour = (m*60)+s;
  if (h===23) {nextHour=0} else {nextHour = h+1};
};

// ---------------- PRICE FUNCTIONS ------------------- //

function redFunction() {
  setTime();
  redChange = secondsInHour*(redTime[h]-redTime[nextHour])/3600;
  redCurrent = redTime[h]- redChange;
  redMultiplier = dayMultiplier*redCurrent;
};
function whiteFunction() {
  setTime();
  whiteChange = secondsInHour*(whiteTime[h]-whiteTime[nextHour])/3600;
  whiteCurrent = whiteTime[h]- whiteChange;
  whiteMultiplier = dayMultiplier*whiteCurrent;
};
function champagneFunction() {
  setTime();
  champagneChange = secondsInHour*(champagneTime[h]-champagneTime[nextHour])/3600;
  champagneCurrent = champagneTime[h]- champagneChange;
  champagneMultiplier = dayMultiplier*champagneCurrent;
};

// ------------------------ RED WINE INPUT PRICES ---------------------- //

function red1Function() {
  redFunction();
  red1Price = redMultiplier*red1BasePrice + eventTime;
  document.getElementById('red1').innerHTML = "2015 Sonoma County Merlot :  $" + red1Price.toFixed(2);
};
function red2Function() {
  redFunction();
  red2Price = redMultiplier*red2BasePrice + eventTime;
  document.getElementById('red2').innerHTML = "2012 California Cabernet :  $" + red2Price.toFixed(2);
};
function red3Function() {
  redFunction();
  red3Price = redMultiplier*red3BasePrice + eventTime;
  document.getElementById('red3').innerHTML = "2013 French Burgundy :  $" + red3Price.toFixed(2);
};
function red4Function() {
  redFunction();
  red4Price = redMultiplier*red4BasePrice + eventTime;
  document.getElementById('red4').innerHTML = "2014 Spanish Syrah :  $" + red4Price.toFixed(2);
};
function red5Function() {
  redFunction();
  red5Price = redMultiplier*red5BasePrice + eventTime;
  document.getElementById('red5').innerHTML = "2015 Orange County Pinot Noir :  $" + red5Price.toFixed(2);
};
function red6Function() {
  redFunction();
  red6Price = redMultiplier*red6BasePrice + eventTime;
  document.getElementById('red6').innerHTML = "2013 French Cabernet :  $" + red6Price.toFixed(2);
};
function red7Function() {
  redFunction();
  red7Price = redMultiplier*red7BasePrice + eventTime;
  document.getElementById('red7').innerHTML = "2011 French Pinot Noir :  $" + red7Price.toFixed(2);
};
function red8Function() {
  redFunction();
  red8Price = redMultiplier*red8BasePrice + eventTime;
  document.getElementById('red8').innerHTML = "2010 Napa Merlot :  $" + red8Price.toFixed(2);
};

// ------------------------ WHITE WINE INPUT PRICES ---------------------- //

function white1Function() {
  whiteFunction();
  white1Price = whiteMultiplier*white1BasePrice + eventTime;
  document.getElementById('white1').innerHTML = "2015 Sonoma County Chardonnay :  $" + white1Price.toFixed(2);
};
function white2Function() {
  whiteFunction();
  white2Price = whiteMultiplier*white2BasePrice + eventTime;
  document.getElementById('white2').innerHTML = "2012 California Pinot Gris :  $" + white2Price.toFixed(2);
};
function white3Function() {
  whiteFunction();
  white3Price = whiteMultiplier*white3BasePrice + eventTime;
  document.getElementById('white3').innerHTML = "2013 French Sauvignon Blanc :  $" + white3Price.toFixed(2);
};
function white4Function() {
  whiteFunction();
  white4Price = whiteMultiplier*white4BasePrice + eventTime;
  document.getElementById('white4').innerHTML = "2014 Spanish Riesling :  $" + white4Price.toFixed(2);
};
function white5Function() {
  whiteFunction();
  white5Price = whiteMultiplier*white5BasePrice + eventTime;
  document.getElementById('white5').innerHTML = "2015 Orange County Riesling :  $" + white5Price.toFixed(2);
};
function white6Function() {
  whiteFunction();
  white6Price = whiteMultiplier*white6BasePrice + eventTime;
  document.getElementById('white6').innerHTML = "2013 French Chardonnay :  $" + white6Price.toFixed(2);
};
function white7Function() {
  whiteFunction();
  white7Price = whiteMultiplier*white7BasePrice + eventTime;
  document.getElementById('white7').innerHTML = "2011 French Pinot Gris :  $" + white7Price.toFixed(2);
};
function white8Function() {
  whiteFunction();
  white8Price = whiteMultiplier*white8BasePrice + eventTime;
  document.getElementById('white8').innerHTML = "2010 Napa Sauvignon Blanc :  $" + white8Price.toFixed(2);
};


// ------------------------ CHAMPAGNE INPUT PRICES ---------------------- //

function champagne1Function() {
  champagneFunction();
  champagne1Price = champagneMultiplier*champagne1BasePrice + eventTime;
  document.getElementById('champagne1').innerHTML = "2015 Andre :  $" + champagne1Price.toFixed(2);
};
function champagne2Function() {
  champagneFunction();
  champagne2Price = champagneMultiplier*champagne2BasePrice + eventTime;
  document.getElementById('champagne2').innerHTML = "2013 Churchill :  $" + champagne2Price.toFixed(2);
};
function champagne3Function() {
  champagneFunction();
  champagne3Price = champagneMultiplier*champagne3BasePrice + eventTime;
  document.getElementById('champagne3').innerHTML = "2011 Moet :  $" + champagne3Price.toFixed(2);
};
function champagne4Function() {
  champagneFunction();
  champagne4Price = champagneMultiplier*champagne4BasePrice + eventTime;
  document.getElementById('champagne4').innerHTML = "2010 Moet :  $" + champagne4Price.toFixed(2);
};


function autoUpdate() {
  red1Function();
  red2Function();
  red3Function();
  red4Function();
  red5Function();
  red6Function();
  red7Function();
  red8Function();
  white1Function();
  white2Function();
  white3Function();
  white4Function();
  white5Function();
  white6Function();
  white7Function();
  white8Function();
  champagne1Function();
  champagne2Function();
  champagne3Function();
  champagne4Function();
};

autoUpdate();
setInterval (autoUpdate, 1000);

$("#menulist li").click(function() {
  $("#menulist ul").children().removeClass("itemselected");
  $("#menulist ul").children().css("border-bottom", "1px solid grey");
  $(this).parent().removeClass("invisible").addClass("itemselected");
  $(this).parent().prev().css("border-bottom", "none");
});
})()
