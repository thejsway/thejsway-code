/*
Display the time one second later
*/

let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

// We start by testing errors cases
if (
  hours >= 0 &&
  hours <= 23 &&
  minutes >= 0 &&
  minutes <= 59 &&
  seconds >= 0 &&
  seconds <= 59
) {
  seconds++; // Incrementing the seconds
  if (seconds === 60) {
    // Next minute: seconds are reset to 0
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      // Next hour: minutes are reset to 0
      minutes = 0;
      hours++;
      if (hours === 24) {
        // Next second is midnight
        hours = 0;
      }
    }
  }
  console.log(
    `In a second, time will be ${hours} hours, ${minutes} minutes et ${seconds} seconds`
  );
} else {
  console.log("Incorrect hour!");
}
