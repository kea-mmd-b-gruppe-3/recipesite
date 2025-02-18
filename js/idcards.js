const myMealType = new URLSearchParams(window.location.search).get("meal-type");

// ------------ normal json
const listContainer = document.querySelector(".grid_1-1-1");

fetch(`https://dummyjson.com/recipes/meal-type/${myMealType}`)
  .then((response) => response.json())
  // skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
  .then((json) => {
    allData = json.recipes;
    showList(allData);
  });

document.querySelectorAll("button").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  const filter = this.dataset.difficulty;
  if (filter == "All") {
    showList(allData);
  } else {
    fraction = allData.filter((product) => product.difficulty === filter);
    showList(fraction);
  }
}

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) =>
        ` <div class="id_card">
          <img src="https://cdn.dummyjson.com/recipe-images/${product.id}.webp" alt="picture of food related to the recipe" />
          <h3>${product.name}</h3>
          <p>${product.difficulty} // Cooking time: ${product.cookTimeMinutes} min</p>
          <p>Rating: ${product.rating}★</p>
        <a href="'https://dummyjson.com/recipes/${product.id}'">Go to Recipe</a>
        </div>
        `
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
