

//BEER PAGE

var d = new Date();
var n = d.getDay();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayRate = {Sunday:0.8, Monday:0.8, Tuesday:0.8, Wednesday:0.85,
  Thursday:0.9, Friday:1.2, Saturday:1.2};
var dayMultiplier = dayRate[day[n]];
var eventTime = 0;
var beer1Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer2Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer3Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer4Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer5Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer6Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer7Time = [1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 0.5, 0.5, 0.6, 0.7, 1.0, 1.2,
    1.5, 1.4, 1.3, 1.2, 1.1, 1.0, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6];
var beer1BasePrice = 5; // stella
var beer2BasePrice = 3; // bud
var beer3BasePrice = 4.5; // heineken
var beer4BasePrice = 4; // michelob
var beer5BasePrice = 5.23; // BBC Nut Brown
var beer6BasePrice = 6.56; // Hoptimus Prime
var beer7BasePrice = 4.12; // Falls City
var today, h, m, s;
var secondsInHour, nextHour;
var beer1Price, beer2Price, beer3Price, beer4Price, beer5Price, beer6Price, beer7Price;
var beer1Change, beer2Change, beer3Change, beer4Change, beer5Change, beer6Change, beer7Change;
var beer1Current, beer2Current, beer3Current, beer4Current, beer5Current, beer6Current, beer7Current;
var beer1Multiplier, beer2Multiplier, beer3Multiplier, beer4Multiplier, beer5Multiplier, beer6Multiplier, beer7Multiplier;
var purchasePrice, finalPrice;

function setTime () {
  today = new Date();
  h = today.getHours();
  m = today.getMinutes();
  s = today.getSeconds();
  secondsInHour = (m*60)+s;
  if (h===23) {nextHour=0} else {nextHour = h+1};
};

function beer1Function() {
  setTime();
  beer1Change = secondsInHour*(beer1Time[h]-beer1Time[nextHour])/3600;
  beer1Current = beer1Time[h]- beer1Change;
  beer1Multiplier = dayMultiplier*beer1Current;
  beer1Price = beer1Multiplier*beer1BasePrice + eventTime;
  document.getElementById('beer1').innerHTML = "Stella :  $" + beer1Price.toFixed(3);
};

function beer2Function() {
  setTime();
  beer2Change = secondsInHour*(beer2Time[h]-beer2Time[nextHour])/3600;
  beer2Current = beer2Time[h]- beer2Change;
  beer2Multiplier = dayMultiplier*beer2Current;
  beer2Price = beer2Multiplier*beer2BasePrice + eventTime;
  document.getElementById('beer2').innerHTML = "Bud Light :  $" + beer2Price.toFixed(3);
};

function beer3Function() {
  setTime();
  beer3Change = secondsInHour*(beer3Time[h]-beer3Time[nextHour])/3600;
  beer3Current = beer3Time[h]- beer3Change;
  beer3Multiplier = dayMultiplier*beer3Current;
  beer3Price = beer3Multiplier*beer1BasePrice + eventTime;
  document.getElementById('beer3').innerHTML = "Heineken :  $" + beer3Price.toFixed(3);
};

function beer4Function() {
  setTime();
  beer4Change = secondsInHour*(beer4Time[h]-beer4Time[nextHour])/3600;
  beer4Current = beer4Time[h]- beer4Change;
  beer4Multiplier = dayMultiplier*beer4Current;
  beer4Price = beer4Multiplier*beer4BasePrice + eventTime;
  document.getElementById('beer4').innerHTML = "Michelob :  $" + beer4Price.toFixed(3);
};

function beer5Function() {
  setTime();
  beer5Change = secondsInHour*(beer5Time[h]-beer5Time[nextHour])/3600;
  beer5Current = beer5Time[h]- beer5Change;
  beer5Multiplier = dayMultiplier*beer5Current;
  beer5Price = beer5Multiplier*beer5BasePrice + eventTime;
  document.getElementById('beer5').innerHTML = "BBC Nut Brown Ale :  $" + beer5Price.toFixed(3);
};

function beer6Function() {
  setTime();
  beer6Change = secondsInHour*(beer6Time[h]-beer6Time[nextHour])/3600;
  beer6Current = beer1Time[h]- beer6Change;
  beer6Multiplier = dayMultiplier*beer6Current;
  beer6Price = beer1Multiplier*beer6BasePrice + eventTime;
  document.getElementById('beer6').innerHTML = "Hoptimus Prime :  $" + beer6Price.toFixed(3);
};

function beer7Function() {
  setTime();
  beer7Change = secondsInHour*(beer7Time[h]-beer7Time[nextHour])/3600;
  beer7Current = beer7Time[h]- beer7Change;
  beer7Multiplier = dayMultiplier*beer7Current;
  beer7Price = beer1Multiplier*beer7BasePrice + eventTime;
  document.getElementById('beer7').innerHTML = "Falls City :  $" + beer7Price.toFixed(3);
};

function autoUpdate() {
  beer1Function();
  beer2Function();
  beer3Function();
  beer4Function();
  beer5Function();
  beer6Function();
  beer7Function();
};

setInterval (autoUpdate, 1000);

$("#menulist li").click(function() {
  $(this).parent().siblings().css("border-bottom", "1px solid grey");
  $(this).parent().siblings().removeClass("itemselected");
  $(this).parent().removeClass("invisible").addClass("itemselected");
  $(this).parent().prev().css("border-bottom", "none");
});
