import CategoryCard from "./CategoryCard"
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import { useState, useEffect } from 'react';

function EditableCategory(props) {
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
        fetch('https://cookbook-api-jt.herokuapp.com/api/categories/' + props.id + '/', {
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
        console.log("Updating Category...");
        setIsEdit(false);
        setIsUpdate(true);
    }   

    function handleCategoryRedir() {
        
    }


    function checkEdit() {
        if (isEdit) {
            return (
                <CategoryForm 
                    id={props.id}
                    name={props.name}
                    description={props.description}
                    onCancelClick={(evt) => {handleCancelClick(evt)}}
                    onFormSubmit={(evt) => {handleUpdate(evt)}}
                />
            );
        } else {
            return (
                <CategoryCard 
                    name={props.name}
                    description={props.description}
                    onEditClick={(evt) => {handleEditClick(evt)}}
                    onDeleteClick={handleDelete}
                    onCategoryClick={handleCategoryRedir()}
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

export default EditableCategory;
