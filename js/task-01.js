const categories = document.querySelector("#categories");
const numOfCategories = categories.children.length;
console.log(`Number of categories: ${numOfCategories}`);
const children = Array.from(categories.children);
const header = Array.from(document.querySelectorAll("h2"));
const list = document.querySelectorAll(".item ul");
for (let i = 0; i < numOfCategories; i++) {
  console.log(`Category: ${header[i].textContent}
Elements: ${list[i].children.length}`);
}
