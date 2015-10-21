function getGreeting(n){
  var greeting = "";
  switch (n){
    case 0:
      greeting = "Hola y bienvenido!";
      break;
    case 1:
      greeting = "Bonjour et bienvenue!";
      break;
    case 2:
      greeting = "سلام و خوش آمدید";
      break;
    case 3:
      greeting = "你好，欢迎光临!";
      break;
    case 4:
      greeting = "ハロー、ようこそ!";
      break;
    case 5:
      greeting = "Hallo und Willkommen!";
      break;
    case 6:
      greeting = "Ciao e Benvenuto!";
      break;
    default:
      greeting = "Hello and welcome!";
      break;
  }
  return greeting;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getDayName(n){
  var day = "";
  switch (n){
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Uh Oh...";
      break;
  }
  return day;
}
function getAdjective(n){
  var adj = "";
  switch (n){
    case 0:
      adj = "fantastic";
      break;
    case 1:
      adj = "joyous";
      break;
    case 2:
      adj = "swell";
      break;
    case 3:
      adj = "larger than life";
      break;
    case 4:
      adj = "spectacular";
      break;
    case 5:
      adj = "beautiful";
      break;
    case 6:
      adj = "charming";
      break;
    case 7:
      adj = "delightful";
      break;
    case 8:
      adj = "grand";
      break;
    case 9:
      adj = "marvelous";
      break;
    case 10:
      adj = "superb";
      break;
    case 11:
      adj = "ravishing";
      break;
    case 12:
      adj = "tip-top";
      break;
    case 13:
      adj = "stupendous";
      break;
    case 14:
      adj = "gnarly";
      break;
    case 15:
      adj = "super-excellent";
      break;
    case 16:
      adj = "splendid";
      break;
    case 17:
      adj = "fabulous";
      break;
    case 18:
      adj = "pleasant";
      break;

    default:
      adj = "wonderful";
      break;
  }
  return adj;
}


var multiLingualSubtitle = document.getElementById("multi-lingual-subtitle");

if(multiLingualSubtitle !== null){
  var greeting = getGreeting(getRandomNum(0, 7));
  document.getElementById("multi-lingual-subtitle").innerHTML = greeting;
}
var fillMe = document.getElementById("fillme");
if(fillMe !== null) {
  var d = new Date();
  var n = d.getDay();
  var day = getDayName(n);
  var adj = getAdjective(getRandomNum(0, 19));

  document.getElementById("fillme").innerHTML = "Have yourself a " + adj + " " + day + "!";
}
