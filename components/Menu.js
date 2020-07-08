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
  const menuDiv = document.createElement('div')
  const menuList = document.createElement('ul')

  menuDiv.classList.add('menu')
  menuDiv.classList.add('hidden')

  menuArray.forEach(item => {
    let newItem = document.createElement('li')
    newItem.textContent = item
    newItem.classList.add('remove')
    menuList.appendChild(newItem)
  });

  menuDiv.appendChild(menuList)

  const menuButton = document.querySelector('.menu-button')

  return menuDiv
}

const header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems))

window.addEventListener('load', () => {
  const menuButton = document.querySelector('.menu-button')
  const menuDiv = document.querySelector('.menu')
  const navLinks = document.querySelectorAll('li')

  //sliding animation and toggling buttons on and off;
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('hidden')
    navLinks.forEach(li => li.classList.toggle('remove'))
  })

  //clicking on nav item will collapse menu and hide links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuDiv.classList.toggle('hidden')
      navLinks.forEach(li => li.classList.toggle('remove'))
    })
  })

  //clicking anywhere outside of nav menu will collapse menu
  window.addEventListener('click', (e) => {
    if ((e.target.classList.value !== 'menu' && e.target.classList.value !== 'menu-button') && !menuDiv.classList.value.includes('hidden')) {
      menuDiv.classList.add('hidden')
      navLinks.forEach(li => li.classList.add('remove'))
    }
  })

})