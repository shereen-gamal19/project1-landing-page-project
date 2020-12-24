# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom. 

the project is when we select any section then it will scroll to the section  and change the background color of the word section and 
the background color of the scrolled section

first i joining the javascript file with html by using <script> tag

second in html i add new section and give it id = section 4 and data-nav = section 4

third in javascript file , i make a new variable "section" and use the method document.quarySelectorAll('section') to sellect all sections in the page.

i make another new variable "newul" to get the element data-nav by using document.getElementById() method.

i make another varaible to use document.createDocumentFragment() method to append all child and to decrease the memory of the code 
 and it is called "fragment".

then i use for each loop to loop all sections in the page and when we click on the any section say section 1 it will scroll to its part in the page so 
we will make a lists with the same numbers of the sections (which =4 here) and make 4links have the same name sd the data-nav value 
make these sections links so : 
 1- i create a variable to get the value of the data-nav of the corresponding section by uding getAttribute()method called "text1".
 2- i create <li> element by using document.createElement() and store it in the varaible called "newLi".
 3- i make variable to create the TextNode from the variable text1 called newTextnode by using  document.createTextNode() method.
 4- i create variable to create a link and call it "newLink" by using document.createElement.
 5-i make an event listener on the "newlink" and use scrollIntoView method and make its behavior be smooth to make the transition animation suitable
 and this is outside the loop.
 6- i  append newTextnode to newlink and append newLink to newli and append newLi to fragment and after the loop is finished i  append fragment to newul

i use the   getBoundingClientRect()method to know the dimensions of each section and make it available to decktop and mobile and use the method window.innerHeight to adjust the dimensions according to the mobile or desktop
 so i make the top > 0 and smaller than 150 for mobile



i make a function called "active_link" to make active link and inside it i select all links by using document.querySelectorAll('a');
and i  get the value of the data-nav for the active section by using .getAttribute() after that i make a loop in all links and i use for each loop and inside the loop 
i removed all link by using classList.remove() method and add the only active link by using .classList.add() method 
and i add a class called "activelink" to the link

i make a function called "activeSection" and put the code of active section inside it
and i loop through all sections by using for each and inside the loop i remove all section withe the class "your-active-class"
and add only the selected active section with class "your-active-class" and after that when the section is selected i call the function active_link for the active section only .
i call the function " activeSection " inside the event of the whole window window.addEventListener()
 and i use the  e.preventDefault() on an event that causes the scroll so ahen we scroll to the specific section then we prevent another sectiond from scrolling.


i use atom as a code editor
i modify in css file in .navbar__menu .menu__link and make it inline-block 
i add new class to li .navbar__menu and make the display:block;
and put background in black color 
i add a new class called .activelink and i add background color rgb(255,215,0) to it 
i add a new rule to section.your-active-class to make its background color id yellow
  