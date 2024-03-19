function addClasses(element, classes) {
  if (classes) {
    element.classList.add(...classes);
  }
}

function addAttributes(element, attributes) {
  if (attributes) {
    const attributeKeys = Object.keys(attributes);
    attributeKeys.forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }
}

function generateElement(tag, textContent, classes, attributes) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  addClasses(element, classes);
  addAttributes(element, attributes);
  return element;
}

function generateElementNS(tag, attributes) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  addAttributes(element, attributes);
  return element;
}

export { generateElement, generateElementNS };
