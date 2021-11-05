import { useState } from 'react';
import Router from 'next/router';
import { v1 as uuidv1 } from 'uuid';

function RecipeForm(props) {
    const [recipeName, setCatName] = useState(props.name) || '';
    const [recipeDesc, setCatDesc] = useState(props.description) || '';
    const [recipeIngredients, setRecipeIngredients] = useState(props.ingredients) || '';
    const [recipeProc, setRecipeProc] = useState(props.procedure) || useState(props.procedure) || '';
    const buttonText = props.id ? 'Update Recipe' : 'Create Recipe';

    function handleFormSubmit (evt) {
        evt.preventDefault();
        if (buttonText === "Update Recipe") {
            console.log("Updating Recipe...");
            fetch('https://cookbook-api-jt.herokuapp.com/api/recipes/' + props.id + '/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"id": props.id, "recipe_name": recipeName, "description": recipeDesc, "ingredients": recipeIngredients, "procedure": recipeProc})
            })
        } else {
            evt.preventDefault();
                console.log("Creating Recipe...");
                fetch('https://cookbook-api-jt.herokuapp.com/api/recipes/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"id": uuidv1(), "recipe_name": recipeName, "description": recipeDesc, "ingredients": recipeIngredients, "procedure": recipeProc})
                })
        }
        
        props.onFormSubmit(evt);
    }

  return (
    <div className="content-center">
        <form onSubmit={(evt) => {handleFormSubmit(evt)}}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Recipe Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"  value={recipeName} onChange={(evt) => {setRecipeName(evt.target.value)}} placeholder="Category Name"></input>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
                    <textarea class="shadow appearance-none border border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" value={recipeDesc} onChange={(evt) => {setRecipeDesc(evt.target.value)}} placeholder="Enter a Description"></textarea>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="ingredients">Ingredients</label>
                    <textarea class="shadow appearance-none border border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="ingredients" type="text" value={recipeIngredients} onChange={(evt) => {setRecipeIngredients(evt.target.value)}} placeholder="Enter the Ingredients"></textarea>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="procedure">Procedure</label>
                    <textarea class="shadow appearance-none border border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="procedure" type="text" value={recipeProc} onChange={(evt) => {setRecipeProc(evt.target.value)}} placeholder="Enter the Procedure"></textarea>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(evt) => {handleFormSubmit(evt)}}>
                        {buttonText}
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-5" type="button" onClick={(evt) => {props.onCancelClick(evt)}}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RecipeForm;
