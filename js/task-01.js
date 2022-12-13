"use strict";

//1st point
const list = document.querySelector("#categories");

const categoriesList = list.children;

console.log(`Number of categories: ${categoriesList.length}`);

//2nd point

const categoryElementsCount = [...categoriesList].forEach((e) => {
  console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelector("ul").childElementCount
    }`
  );
});
