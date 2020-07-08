/* This is the data we will be using, study it but don't change anything, yet. */
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
// ----------------------------------------------------------------------------------------------------------------
function menuMaker(menuArray) {
  const menuDiv = document.createElement('div.menu')
  const menuList = document.createElement('ul')

  menuDiv.classList.add('menu')

  menuArray.forEach(item => {
    let newItem = document.createElement('li')
    newItem.textContent = item
    menuList.appendChild(newItem)
  });

  menuDiv.appendChild(menuList)

  const menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', () => menuDiv.classList.toggle('menu--open'))

  return menuDiv
}

const header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems))