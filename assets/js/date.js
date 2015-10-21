function getDateString(day, month, year, id){
  var str = "";
  var lastDigit = (day % 10);
  var supStr = "";
  switch (lastDigit){
    case 1:
      supStr = "st";
      break;
    case 2:
      supStr = "nd";
      break;
    case 3:
      supStr = "rd";
      break;
    default:
      supStr = "th";
      break;
  }

  str = month + " " + day + supStr.sup() + ", " + year;
  document.getElementById(id).innerHTML = str;
}
