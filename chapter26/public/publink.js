const serverUrl = "http://localhost:3000";

const contentElement = document.getElementById("content");

// Create and return a DOM element showing a link
const createLinkElement = link => {
  // Create DOM element for link title
  const titleElement = document.createElement("a");
  titleElement.href = link.url;
  titleElement.classList.add("linkTitle");
  titleElement.appendChild(document.createTextNode(link.title));

  // Create DOM element for link URL
  const urlElement = document.createElement("span");
  urlElement.classList.add("linkUrl");
  urlElement.appendChild(document.createTextNode(link.url));

  // Create DOM element for link headline, containing title & URL
  const headlineElement = document.createElement("h4");
  headlineElement.classList.add("linkHeadline");
  headlineElement.appendChild(titleElement);
  headlineElement.appendChild(urlElement);

  // Create DOM element for link author
  const authorElement = document.createElement("span");
  authorElement.classList.add("linkAuthor");
  authorElement.appendChild(
    document.createTextNode(`Submitted by ${link.author}`)
  );

  // Create DOM element for link
  const linkElement = document.createElement("div");
  linkElement.classList.add("link");
  linkElement.appendChild(headlineElement);
  linkElement.appendChild(authorElement);

  return linkElement;
};

// Create and return a DOM input element
// Parameters are name, placeholder text and input size
const createInputElement = (name, placeholder, size) => {
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.setAttribute("name", name);
  inputElement.setAttribute("placeholder", placeholder);
  inputElement.setAttribute("size", size);
  inputElement.setAttribute("required", "true");
  inputElement.classList.add("form-control");
  return inputElement;
};

const submitLink = e => {
  // Cancel default form behavior
  e.preventDefault();

  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);
  // Send link data to the server with an aynchronous POST request
  fetch(`${serverUrl}/links`, {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(newLink => {
      // Add new link to page, replacing form
      const newLinkElement = createLinkElement(newLink);
      contentElement.replaceChild(newLinkElement, e.target);

      // Create info message indicating success
      const infoElement = document.createElement("div");
      infoElement.classList.add("alert");
      infoElement.classList.add("alert-success");
      infoElement.textContent = `The link ${newLink.title} has been succesfully added!`;
      contentElement.insertBefore(infoElement, newLinkElement);
      // Remove info message after 2 seconds
      setTimeout(() => {
        contentElement.removeChild(infoElement);
      }, 2000);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Create and return a form for submitting a new link
const createLinkForm = () => {
  // Create input fields for link properties
  const authorElement = createInputElement("author", "Enter author", 20);
  const titleElement = createInputElement("title", "Enter link title", 40);
  const urlElement = createInputElement("url", "Enter link URL", 40);

  // Create submit button
  const submitElement = document.createElement("input");
  submitElement.type = "submit";
  submitElement.value = "Add link";
  submitElement.classList.add("btn");
  submitElement.classList.add("btn-primary");

  // Create link submission form
  const linkFormElement = document.createElement("form");
  linkFormElement.classList.add("linkForm");
  linkFormElement.classList.add("form-inline");
  linkFormElement.appendChild(authorElement);
  linkFormElement.appendChild(titleElement);
  linkFormElement.appendChild(urlElement);
  linkFormElement.appendChild(submitElement);

  // Handle form submission
  linkFormElement.addEventListener("submit", submitLink);

  return linkFormElement;
};

// Fetch links from server
fetch(`${serverUrl}/api/links`)
  .then(response => response.json())
  .then(links => {
    links.forEach(link => {
      const linkElement = createLinkElement(link);
      contentElement.appendChild(linkElement);
    });
  })
  .catch(err => {
    console.error(err.message);
  });

// Handle click on link submit button
document.getElementById("submitButton").addEventListener("click", () => {
  // Create link submission form
  const formElement = createLinkForm();
  // Add form on page before the first link
  contentElement.insertBefore(formElement, document.querySelector(".link"));
});
