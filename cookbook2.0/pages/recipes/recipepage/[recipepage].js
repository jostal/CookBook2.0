import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import RecipeForm from '../../../components/RecipeForm';

const RecipePage = ({ recipes }) => {
    const router = useRouter();
    console.log("Showing recipe with id: " + router.query.recipepage);
    const [recipeObj, setRecipeObj] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        console.log("Showing Recipe page...");
        var tempObj = [];
        for (const rec in recipes) {
            if (recipes[rec].id === parseInt(router.query.recipepage)) {
                tempObj = recipes[rec];
            }
        }
        setRecipeObj(tempObj);
    }, [])

    useEffect(() => {
        if (isUpdate) {
            const timer = setTimeout(() => {
                setIsUpdate(false);
                window.location.reload();
            }, 500);
            
        }
        //window.location.reload();
    }, [isUpdate])

    function onEditClick(evt) {
        evt.preventDefault();
        setIsEdit(true);

    }

    function handleCancelClick(evt) {
        evt.preventDefault();
        setIsEdit(false);
    }

    function handleUpdate(evt) {
        evt.preventDefault();
        console.log("Updating Recipe...");
        setIsEdit(false);
        setIsUpdate(true);
    }

    function checkIsEdit() {
        if (isEdit) {
            return (
                <RecipeForm 
                    id={recipeObj.id}
                    category={recipeObj.recipe_category}
                    name={recipeObj.recipe_name}
                    description={recipeObj.description}
                    ingredients={recipeObj.ingredients}
                    procedure={recipeObj.procedure}
                    author={recipeObj.author}
                    onCancelClick={(evt) => {handleCancelClick(evt)}}
                    onFormSubmit={(evt) => {handleUpdate(evt)}}
                />
            )
        } else {
            return (
                <div className="relative w-11/12 bg-gradient-to-br from-blue-50  via-blue-100 to-blue-200 m-auto mt-10 rounded shadow-lg">
                    <span className="float-right m-8" onClick={(evt) => onEditClick(evt)}><Image src="/editIcon.png" width="15" height="15"></Image></span>
                    <div className="m-8">
                        <br />
                        <h1 className="text-4xl" style={{"white-space": "pre-wrap"}}><strong>{recipeObj.recipe_name}</strong></h1>
                        <h1 className="text-lg"><em>Author:</em> {recipeObj.author}</h1> <br />
                        <h1 className="text-xl"><strong>Description</strong><br />{recipeObj.description}</h1><br />
                        <h1 className="text-xl"><strong>Ingredients</strong><br /><pre>{recipeObj.ingredients}</pre></h1><br />
                        <h2 className="text-xl"><strong>Procedure</strong><br /><pre>{recipeObj.procedure}</pre></h2> <br />
                        <br />
                    </div>
                </div>
            )
        }
    }

    return (
        checkIsEdit()
    )
}

export default RecipePage

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