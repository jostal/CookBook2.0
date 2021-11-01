import CategoryCard from "./CategoryCard"
import CategoryForm from "./CategoryForm";
import { useState } from 'react';

function EditableCategory(props) {
    const [isEdit, setIsEdit] = useState(false);

    function handleDelete() {

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
    }   

    function handleCategoryRedir() {
        
    }


    function checkEdit() {
        if (isEdit) {
            return (
                <CategoryForm 
                    id={props.id}
                    name={props.name}
                    desription={props.description}
                    onCancelClick={(evt) => {handleCancelClick(evt)}}
                    onFormSubmit={(evt) => {handleUpdate(evt)}}
                />
            );
        } else {
            props.refreshCategories();
            return (
                <CategoryCard 
                    name={props.name}
                    description={props.description}
                    onEditClick={(evt) => {handleEditClick(evt)}}
                    onDeleteClick={handleDelete()}
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
