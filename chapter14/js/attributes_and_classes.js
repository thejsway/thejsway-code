/*
Handling attributes and classes
*/

// Show some info about links
const linkInfo = () => {
  const linkElements = document.getElementsByTagName("a");
  const linkCount = linkElements.length;
  console.log(linkCount);

  if (linkCount > 0) {
    console.log(linkElements[0].getAttribute("href"));
    console.log(linkElements[linkCount - 1].getAttribute("href"));
  }

  return linkCount;
};

// Show if an element has a class
const has = (id, someClass) => {
  const element = document.getElementById(id);
  if (element !== null) {
    console.log(element.classList.contains(someClass));
  } else {
    console.error(`No element has id ${id}`);
  }
};

linkInfo();

has("saxophone", "woodwind"); // Should show true
has("saxophone", "brass"); // Should show false
has("trumpet", "brass"); // Should show true
has("contrabass", "chordophone"); // Should show an error message
