const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});
