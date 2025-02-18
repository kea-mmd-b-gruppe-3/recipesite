console.log("siden vises");

const categorylistContainer = document.querySelector(".grid_1-1-1");

fetch("https://dummyjson.com/recipes/meal-type/snack")
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  console.log("mine data er:", data);

  const markup = data
    .map(
      (element) => `
            <div class="category">
          <a href="idcards.html">
            <img src="../img/breakfast.webp" alt="breakfast category" />
            <h4 class="category_name">Breakfast</h4>
          </a>
        </div>
        <div class="category">
          <a href="idcards.html?mealType=${element.mealType}">
            <img src="../img/lunch.webp" alt="lunch category" />
            <h4 class="category_name">Lunch</h4>
          </a>
        </div>
        <div class="category">
          <a href="idcards.html">
            <img src="../img/dinner.webp" alt="dinner category" />
            <h4 class="category_name">Dinner</h4>
          </a>
        </div>
        <div class="category">
          <a href="idcards.html">
            <img src="../img/dessert.webp" alt="dessert category" />
            <h4 class="category_name">Dessert</h4>
          </a>
        </div>
        <div class="category">
          <a href="idcards.html">
            <img src="../img/breakfast.webp" alt="breakfast category" />
            <h4 class="category_name">Snacks</h4>
          </a>
        </div>
        <div class="category">
          <a href="idcards.html">
            <img src="../img/beverage.webp" alt="beverage category" />
            <h4 class="category_name">Beverages</h4>
          </a>
        </div>
        `
    )
    .join("");
  categorylistContainer.innerHTML = markup;
}
