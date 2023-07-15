const categoriesUl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesUl.length}`);

categoriesUl.forEach((el) => {
  let title = el.querySelector("h2");
  let titleLi = el.querySelectorAll("li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${titleLi.length}`);
});
