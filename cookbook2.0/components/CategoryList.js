import EditableCategory from './EditableCategory';
import AddCategoryButton from './AddCategoryButton';

function CategoryList(props) {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {props.categories.map((category) => (
          <EditableCategory 
            key={category.category_id}
            id={category.category_id}
            name={category.category_name}
            description={category.description}
            onDeleteClick={props.onDeleteClick}
            onCategoryClick={props.onCategoryClick}
          />
        ))}
        <AddCategoryButton />
      </div>
    </div>
  )
}

export default CategoryList;
