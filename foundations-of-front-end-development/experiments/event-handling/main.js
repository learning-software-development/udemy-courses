let menuItems = document.querySelectorAll(".menu-item > a"); // returns a Nodelist

function getInfoPanelFromElement(element) {
  return element.parentNode.querySelector('.menu-item-info');
}

function displayInfoPanelForElement(event) { // mouse event
  getInfoPanelFromElement(event.target).classList.add('is-visible');
}

function hideInfoPanelForElement(event) {
  getInfoPanelFromElement(event.target).classList.remove('is-visible');
}

for (let i = 0; i < menuItems.length; i++) {
  let anchor = menuItems[i];
  anchor.addEventListener('mouseover', displayInfoPanelForElement);
  anchor.addEventListener('mouseout', hideInfoPanelForElement);
}
