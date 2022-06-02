// Write your code here!

// // creates an element within a variable to save a reference to it. makes it easier to use later, especially with append(), like the element append below on line 20
// const element = document.createElement("div");

// //adds the newly created element to the DOM's html
// document.body.append(element);

// //Adds an unordered list 
// const ul = document.createElement("ul");

// //Adds content to the list
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }

// //adds the ul to the div created above
// element.append(ul);

// //or use this if creating an unordered list in the body without creating a new div first
// document.body.append(ul);

// //to remove an element's child (2nd li in the ul):
// const ul = document.getElementsByTagName("ul")[0];

// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// // to remove the entire ul element:
// ul.remove();

main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.textContent = ('Jen is the champion');