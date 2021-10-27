import CategoryCard from "./CategoryCard"
import { useState } from 'react';

function EditableCategory(props) {
    const [isEdit, setIsEdit] = useState(false);

    function handleDelete() {

    }

    function handleUpdate(category) {
        setIsEdit(false);
        category.id = props.id;
        props.onUpdateClick(category);
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
                    onCancelClick={setIsEdit(false)}
                    onFormSubmit={handleUpdate()}
                />
            );
        } else {
            return (
                <CategoryCard 
                    name={props.name}
                    description={props.description}
                    onEditClick={() => {setIsEdit(true)}}
                    onDeleteClick={handleDelete()}
                    onCategoryClick={handleCategoryRedir()}
                />
            );
        }
    }

  return (
    <div className="content-center">
      {checkEdit()}
    </div>
  )
}

export default EditableCategory;
