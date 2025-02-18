// ------------ filterings funktion altså option
// const selectElement = document.querySelector("selectElement");
// selectElement.addEventListener("change");


// ------------ normal json
const listContainer = document.querySelector(".grid_1-1-1");

fetch(`https://dummyjson.com/recipes`)
  .then((response) => response.json())
  // skriver () efter .json fordi det er en funktion der allerede findes og vi kalder på den via ()
  .then((product) => showList(product.recipes));

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
