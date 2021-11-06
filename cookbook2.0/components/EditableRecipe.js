import RecipeCard from "./RecipeCard"
import RecipeForm from "./RecipeForm";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function EditableRecipe(props) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (isUpdate) {
            const timer = setTimeout(() => {
                setIsUpdate(false);
                window.location.reload();
            }, 500);
            
        }
        //window.location.reload();
    }, [isUpdate])

    function handleDelete(evt) {
        console.log('Deleting...')
        evt.preventDefault();
        fetch('https://cookbook-api-jt.herokuapp.com/api/recipes/' + props.id + '/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        setIsUpdate(true);
    }

    function handleCancelClick(evt) {
        evt.preventDefault();
        setIsEdit(false);
    }

    function handleEditClick(evt) {
        evt.preventDefault();
        setIsEdit(true);
    }

    function handleUpdate(evt) {
        evt.preventDefault();
        console.log("Updating Recipe...");
        setIsEdit(false);
        setIsUpdate(true);
    }   

    function handleRecipeRedir(evt) {
        evt.preventDefault();
        console.log("Opening Recipe...");
        router.push("recipepage/" + props.id);
    }


    function checkEdit() {
        if (isEdit) {
            return (
                <RecipeForm 
                    id={props.id}
                    category={props.category}
                    name={props.name}
                    description={props.description}
                    ingredients={props.ingredients}
                    procedure={props.procedure}
                    author={props.author}
                    onCancelClick={(evt) => {handleCancelClick(evt)}}
                    onFormSubmit={(evt) => {handleUpdate(evt)}}
                />
            );
        } else {
            return (
                <RecipeCard 
                    name={props.name}
                    description={props.description}
                    ingredients={props.ingredients}
                    procedure={props.procedure}
                    author={props.author}
                    onEditClick={(evt) => {handleEditClick(evt)}}
                    onDeleteClick={handleDelete}
                    onRecipeClick={handleRecipeRedir}
                />
            );
        }
    }

  return (
    <div className="content-center">
      {checkEdit()}
      {console.log(isEdit)}
    </div>
  )
}

export default EditableRecipe;
