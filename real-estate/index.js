import { propertyForSaleArr } from "./properties/propertyForSaleArr"
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj"

console.log(placeholderPropertyObj)

function getPropertyHtml(properties) {
  if (!properties) {
    const { propertyLocation, priceGBP, roomsM2, comment, image } = placeholderPropertyObj;

    return `
    <section class="card">
      <img src="/images/${image}">
      <div class="card-right">
          <h2>${propertyLocation}</h2>
          <h3>${priceGBP}</h3>
          <p>${comment}</p>
          <h3>${calculateArea(roomsM2)} m&sup2;</h3>
      </div>
    </section>`
  }

  const propertyHtml = properties.map(function(proprty){
    return `
    <section class="card">
      <img src="/images/${proprty.image}">
      <div class="card-right">
          <h2>${proprty.propertyLocation}</h2>
          <h3>${proprty.priceGBP}</h3>
          <p>${proprty.comment}</p>
          <h3>${calculateArea(proprty.roomsM2)} m&sup2;</h3>
      </div>
    </section>`
  }).join('')
  return propertyHtml;
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/
}

const calculateArea = arr => {
  const totalArea = arr.reduce((area, current) => area + current);
  return totalArea;
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml()