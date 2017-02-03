/* 
Show the following day of the week
*/

const day = prompt("Enter a day of the week:");

// Solution using an if
if (day === "monday") {
    alert("Tomorrow is tuesday");
} else if (day === "tuesday") {
    alert("Tomorrow is wednesday");
} else if (day === "wednesday") {
    alert("Tomorrow is thursday");
} else if (day === "thursday") {
    alert("Tomorrow is friday");
} else if (day === "friday") {
    alert("Tomorrow is saturday");
} else if (day === "saturday") {
    alert("Tomorrow is sunday");
} else if (day === "sunday") {
    alert("Tomorrow is monday");
} else {
    alert("Unrecognized day!");
}

// Solution using a switch
/*switch (day) {
case "monday":
    alert("Tomorrow is tuesday");
    break;
case "tuesday":
    alert("Tomorrow is wednesday");
    break;
case "wednesday":
    alert("Tomorrow is thursday");
    break;
case "thursday":
    alert("Tomorrow is friday");
    break;
case "friday":
    alert("Tomorrow is saturday");
    break;
case "saturday":
    alert("Tomorrow is sunday");
    break;
case "sunday":
    alert("Tomorrow is monday");
    break;
default:
    alert("Unrecognized day!");
}*/