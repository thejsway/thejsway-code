/*
Show a child of a node
*/

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
  if (node.nodeType === document.ELEMENT_NODE) {
    if (index >= 0 && index < node.childNodes.length) {
      console.log(node.childNodes[index]);
    } else {
      console.error("Wrong index");
    }
  } else {
    console.error("Wrong node type");
  }
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Wrong index"
showChild(document.body, -1);

// Should show "Wrong index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
