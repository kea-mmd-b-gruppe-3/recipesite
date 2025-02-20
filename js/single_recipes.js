const mySingleRecipe = new URLSearchParams(window.location.search).get("id");

// ------------ normal json
// Henter containeren, hvor opskriften skal indsættes//
const listContainer = document.querySelector(".recipe_container");

// Henter data fra API'et//
fetch(`https://dummyjson.com/recipes/${mySingleRecipe}`)
  .then((res) => res.json()) // Konverterer svaret til JSON//
  .then(
    (data) =>
      // Indsætter HTML med de hentede data//
      (listContainer.innerHTML = `
        <h1>${data.name}</h1>
        <div class="grid_1-1">
            <!-- Viser billedet af opskriften -->
        <img src="https://cdn.dummyjson.com/recipe-images/${data.id}.webp" alt="tester"/>
            <!-- Viser forberedelsestid, tilberedningstid, antal portioner og sværhedsgrad -->
        <div class="info">
        <h3>Preptime minutes: ${data.prepTimeMinutes}</h3> 
        <h3>Cooktime minutes: ${data.cookTimeMinutes}</h3>
        <h3> Servings: ${data.servings}</h3>
        <h3> Difficulty: ${data.difficulty}</h3>
        </div>
        </div>
        <div class="grid_1-1">
        <div class="ingredients">
        <h3>Ingredients</h3>
            <!-- Mapper ingredienserne til en liste -->
        <p><ul>
            ${data.ingredients.map((step) => `<li>${step}</li>`).join("")}
        </ul></p>
        </div>
        <div class="step_by_step">
        <h3>Instructions</h3>
            <!-- Mapper instruktionerne til en liste -->  
        <p><ul>
            ${data.instructions.map((step) => `<li>${step}</li>`).join("")}
        </ul></p>
        </div>
        </div>`)
  );
