/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

// Declaring global variables

const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const header = document.querySelector('.page__header');


// Start building the nav in JS
buildNav = () => {
  sections.forEach(section => {
    // For each of the section elements it creates a list item with inside a link and text. At the end it appends it to the Navbar list class.
    const navLink = document.createElement('li');
    navLink.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navBarList.appendChild(navLink);
    // Calling function declarated below
    scrollToSection(navLink, section);
  });
}

// Calling building the nav
buildNav();

// Fucntion declaration to click and smoothly scroll to section ID
function scrollToSection(navLink, section) {
  navLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  });
}

// Function called in scroll event. It highlights the menu link class when the correspondant section is in view port
function makeActive (){
  const menuItemActive = document.querySelectorAll(".menu__link")
  sections.forEach((section, i)=>{
      const sectionBond = section.getBoundingClientRect(); 
      // This condiction adds and remove the class based on top position so that the class is not toggled as soon as the section enters the viewport
      if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
          section.classList.add("section-active");
          menuItemActive[i].classList.add("active-link");
      } else{
          section.classList.remove("section-active");
          menuItemActive[i].classList.remove("active-link");
      }
  })
}

window.addEventListener('scroll',(event)=>{
  makeActive();
})
        

