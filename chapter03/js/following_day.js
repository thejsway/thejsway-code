/*
Show the following day of the week
*/

const day = prompt("Enter a day of the week:");

// Solution using an if
if (day === "monday") {
  console.log("Tomorrow is tuesday");
} else if (day === "tuesday") {
  console.log("Tomorrow is wednesday");
} else if (day === "wednesday") {
  console.log("Tomorrow is thursday");
} else if (day === "thursday") {
  console.log("Tomorrow is friday");
} else if (day === "friday") {
  console.log("Tomorrow is saturday");
} else if (day === "saturday") {
  console.log("Tomorrow is sunday");
} else if (day === "sunday") {
  console.log("Tomorrow is monday");
} else {
  console.log("Unrecognized day!");
}

// Alternative solution using a switch
/* switch (day) {
  case "monday":
    console.log("Tomorrow is tuesday");
    break;
  case "tuesday":
    console.log("Tomorrow is wednesday");
    break;
  case "wednesday":
    console.log("Tomorrow is thursday");
    break;
  case "thursday":
    console.log("Tomorrow is friday");
    break;
  case "friday":
    console.log("Tomorrow is saturday");
    break;
  case "saturday":
    console.log("Tomorrow is sunday");
    break;
  case "sunday":
    console.log("Tomorrow is monday");
    break;
  default:
    console.log("Unrecognized day!");
} */
