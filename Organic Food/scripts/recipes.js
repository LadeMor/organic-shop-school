const recipeList = [
    {
        label:"Breakfast",
        coverImage:"assets/images/recipes/recipe1.png",
        title:"Banana Crunch Pancakes"
    },
    {
        label:"Salads",
        coverImage:"assets/images/recipes/recipe2.png",
        title:"Minty Melon Salad"
    },
    {
        label:"Main Dishes",
        coverImage:"assets/images/recipes/recipe3.png",
        title:"Mexican Casserole"
    },
]

const recipeListElement = document.querySelector(".recipes-list");

recipeList.forEach(recipe => {
    const newElement = document.createElement("div");

    newElement.classList.add("recipes-item");
    newElement.innerHTML = `
                            <div class="recipes-item-image-container">
                                <img src="${recipe.coverImage}" alt="Recipe">
                                <div class="recipe-item-image-label">
                                    <p>${recipe.label}</p>
                                </div>
                            </div>
                            <h2 class="recipes-item-title">${recipe.title}</h2>
                            `

    recipeListElement.appendChild(newElement);
})