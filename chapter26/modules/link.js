// Represent a link
module.exports = class Link {
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
};
