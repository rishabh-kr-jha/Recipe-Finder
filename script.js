// document.getElementById('search-button').addEventListener('click', () => {
//     const ingredient = document.getElementById('ingredient-input').value;
//     const recipesDiv = document.getElementById('recipes');
//     const apiKey = '67c3f908b8ff486e99313314a720de3a';  // Replace with your Spoonacular API key

//     // Clear previous results
//     recipesDiv.innerHTML = '';

//     if (ingredient.trim() === '') {
//         recipesDiv.innerHTML = '<p>Please enter an ingredient.</p>';
//         return;
//     }

//     fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&apiKey=${apiKey}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.length === 0) {
//                 recipesDiv.innerHTML = '<p>No recipes found with the given ingredient.</p>';
//                 return;
//             }

//             data.forEach(recipe => {
//                 const recipeDiv = document.createElement('div');
//                 recipeDiv.classList.add('recipe');
                
//                 const recipeImg = document.createElement('img');
//                 recipeImg.src = recipe.image;
//                 recipeDiv.appendChild(recipeImg);
                
//                 const recipeName = document.createElement('h2');
//                 recipeName.textContent = recipe.title;
//                 recipeDiv.appendChild(recipeName);
                
//                 recipesDiv.appendChild(recipeDiv);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//             recipesDiv.innerHTML = '<p>There was an error fetching the recipes. Please try again later.</p>';
//         });
// });

document.getElementById('search-button').addEventListener('click', () => {
    const ingredient = document.getElementById('ingredient-input').value;
    const recipesDiv = document.getElementById('recipes');
    const apiKey = '67c3f908b8ff486e99313314a720de3a';  // Replace with your Spoonacular API key

    // Clear previous results
    recipesDiv.innerHTML = '';

    if (ingredient.trim() === '') {
        recipesDiv.innerHTML = '<p>Please enter an ingredient.</p>';
        return;
    }

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=5&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                recipesDiv.innerHTML = '<p>No recipes found with the given ingredient.</p>';
                return;
            }

            data.forEach(recipe => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                
                const recipeImg = document.createElement('img');
                recipeImg.src = recipe.image;
                recipeDiv.appendChild(recipeImg);
                
                const recipeName = document.createElement('h2');
                recipeName.textContent = recipe.title;
                recipeDiv.appendChild(recipeName);

                // Add click event to fetch detailed information
                recipeDiv.addEventListener('click', () => {
                    fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`)
                        .then(response => response.json())
                        .then(detailedInfo => {
                            // Display detailed information in a modal or expanded view
                            console.log(detailedInfo); // Replace with your implementation
                        })
                        .catch(error => {
                            console.error('Error fetching detailed information:', error);
                            // Handle error gracefully
                        });
                });
                
                recipesDiv.appendChild(recipeDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            recipesDiv.innerHTML = '<p>There was an error fetching the recipes. Please try again later.</p>';
        });
});