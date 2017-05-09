/*
Number of days in a month
*/

const month = Number(prompt("Enter a month number:"));

// Solution using if
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  alert("This month has 31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  alert("This month has 30 days");
} else if (month === 2) {
  alert("This month has 28 days");
} else {
  alert("Unknown month!");
}

/* Solution using a switch.
Notice the volontary absence of break statements for months having the same number of days
This limits code duplication in cases
*/
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("This month has 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("This month has 30 days");
    break;
  case 2:
    alert("This month has 28 days");
    break;
  default:
    alert("Unknown month!");
}

// Solution using if and switch
if (month >= 1 && month <= 12) {
  let nbdays = 31;
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      nbdays = 30;
      break;
    case 2:
      nbdays = 28;
      break;
  }
  alert(`This month has ${nbdays} days`);
} else {
  alert("Unknown month!");
}
