

document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display recipes
    async function fetchAndDisplayRecipes() {
        
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const data = await response.json();

            
            const recipeListContainer = document.getElementById('recipe-list');

            
            recipeListContainer.innerHTML = '';

            
            if (data.meals) {
                
                data.meals.forEach(recipe => {
                    const recipeItem = document.createElement('div');
                    recipeItem.classList.add('recipe-item');

                    const recipeName = document.createElement('h2');
                    recipeName.textContent = recipe.strMeal;

                    const recipeDescription = document.createElement('p');
                    recipeDescription.textContent = recipe.strInstructions;

                    recipeItem.appendChild(recipeName);
                    recipeItem.appendChild(recipeDescription);

                    recipeListContainer.appendChild(recipeItem);
                });
            } else {
                console.error('No recipes found');
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    
    fetchAndDisplayRecipes();
});
