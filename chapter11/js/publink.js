/*
Social news program
*/

// Represent a link
class Link {
  constructor(title, url, author) {
    let absoluteUrl = url;
    // Check if url starts with "http://" or "https://"
    if (
      !absoluteUrl.startsWith("http://") &&
      !absoluteUrl.startsWith("https://")
    ) {
      // If not, add "http://" at the beginning
      absoluteUrl = `http://${absoluteUrl}`;
    }

    // Add data properties
    this.title = title;
    this.author = author;
    this.url = absoluteUrl;
  }

  // Describe the link as a string
  toString() {
    return `${this.title} (${this.url}). Author: ${this.author}`;
  }
}

// Initial links array
const links = [];
links.push(new Link("Hacker News", "https://news.ycombinator.com", "Baptiste"));
links.push(new Link("Reddit", "https://reddit.com", "Thomas"));
links.push(new Link("Boing Boing", "boingboing.net", "Daniel"));

let choice;
// Main program loop
// Display options until the user chooses to quit
while (choice !== "0") {
  let choices = "\n1 : Show links";
  choices += "\n2 : Add a link";
  choices += "\n3 : Remove a link";
  choices += "\n0 : Quit";
  choice = prompt(`Choose an option: ${choices}`);

  switch (choice) {
    case "1": {
      if (links.length > 0) {
        // Show each link in an alert window
        for (let i = 0; i < links.length; i++) {
          alert(`${i + 1}: ${links[i].toString()}`);
        }
      } else {
        alert("No links to display!");
      }
      break;
    }
    case "2": {
      // Input link properties
      const title = prompt("Enter the link title:");
      const url = prompt("Enter the link url:");
      const author = prompt("Enter the link author:");
      // Add new link to array
      links.push(new Link(title, url, author));
      break;
    }
    case "3": {
      if (links.length > 0) {
        // Input link index (must be between 1 and the number of links)
        let index = -1;
        const maxIndex = links.length;
        while (index < 1 || index > links.length) {
          index = Number(
            prompt(`Enter the index of the link to be removed (between 1 and ${maxIndex}):`)
          );
        }
        // Remove selected link from array
        links.splice(index - 1, 1);
      } else {
        alert("No links to remove!");
      }
      break;
    }
  }
}
alert("See you later!");
