import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import RecipeList from '../../components/RecipeList';

const Recipes = ({ recipes }) => {
    const router = useRouter();
    console.log("Showing recipes for category: " + router.query.recipes);
    const [recipeArr, setRecipeArr] = useState([]);

    useEffect(() => {
        console.log("Sorting Recipes...");
        var tempArr = [];
        console.log(recipes[0].recipe_category)
        for (const rec in recipes) {
            if (recipes[rec].recipe_category === router.query.recipes) {
                tempArr.push(recipes[rec]);
            }
        }
        setRecipeArr(tempArr);
    }, [])

    return (
        <div>
            {console.log(recipeArr)}
            <RecipeList 
                recipes={recipeArr}
            />
        </div>
    )
}

export default Recipes

export const getServerSideProps = async (context) => {
    var recipes;
    await fetch('https://cookbook-api-jt.herokuapp.com/api/recipes/')
          .then(res => res.json())
          .then(data => {recipes = data});
    return {
      props: {
        recipes,
      },
    };
  };