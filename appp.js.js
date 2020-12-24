//i will make a variables  sections and newul to sellect all sections and navbar__list by using document.querySelectorAll
const sections = document.querySelectorAll('section');
const newul = document.getElementById("navbar__list");
// imake an imaginary variable fragment
const fragment = document.createDocumentFragment();
// i will loop through al sections by using  forEach loop
sections.forEach((section) => {
  // i will get the value of data-nav for each section  and store it text1
  let text1 = section.getAttribute("data-nav");
  // i will make a new li for each section and store it the varisble newli
  let newLi = document.createElement('li');
//i will make avariable to createTextNode from the variable text1
  let newTextnode = document.createTextNode(text1);
// i will make a new link for each section by using newLink variable
  let newLink = document.createElement('a');
  // i will add eventlistener for each link to scroll to it when we click on its corresponding section
  //we can add eventlistener on li or on link
//  newLi.addEventListener('click',function (){
//    section.scrollIntoView({behavior:"smooth"})});

newLink.addEventListener('click',function (){
  section.scrollIntoView({behavior:"smooth"})
});


// append newTextnode to newlink
  newLink.appendChild(newTextnode);
  // append newLink to newli
  newLi.appendChild(newLink);
  //append newLi to fragment
  fragment.appendChild(newLi);

});
// append fragment to newul
newul.appendChild(fragment);

//add active link
function active_link(active_section){

  // i will get the value of the data-nav for the active section by using variable called newsection_nav
  let newsection_nav = active_section.getAttribute('data-nav');
// i will make a variable called linkss and select all links
  let linkss = document.querySelectorAll('a');

//looping through each link
  linkss.forEach((link) => {
//if  text content of the active section ==  or === text content of its link then we select all links and remove the non active links and add the active link only
      if(link.textContent == newsection_nav){

        linkss.forEach((link) => {
          link.classList.remove('activelink');
        });
        link.classList.add('activelink');
      }
  });
}
//add active section  and link it with active link
// make a function called activeSection and put the code of active section inside it
function activeSection(){
  sections.forEach((section) => {
  // we will know the dimensions of each section by using variable called rect and getBoundingClientRect() method
    let rect = section.getBoundingClientRect();
// we will make the active section suitable for the mobile and computer
    if (rect.top>=0 && rect.top<=150 ){
      // we loop through each section and remove all section and ass the active section only and change its background color
      sections.forEach((section) => {
         section.classList.remove('your-active-class');
      });
      section.classList.add('your-active-class');
      //after the loop finished we call active_link and pass active section as a paramter to it
     active_link(section);
    }

 });
}
window.addEventListener(
    'scroll',
    function (e) {
        e.preventDefault();
        activeSection();
    },
    false
)
























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
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
