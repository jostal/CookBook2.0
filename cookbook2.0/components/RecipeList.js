import EditableRecipe from './EditableRecipe';
import AddRecipeButton from './AddRecipeButton';

function CategoryList(props) {

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        {props.recipes.map((recipe) => (
          <EditableRecipe 
            key={recipe.id}
            id={recipe.id}
            category={recipe.category}
            name={recipe.recipe_name}
            description={recipe.description}
            ingredients={recipe.ingredients}
            procedure={recipe.procedure}
            author={recipe.author}
            onDeleteClick={props.onDeleteClick}
            onCategoryClick={props.onCategoryClick}
          />
        ))}
        <AddRecipeButton />
      </div>
    </div>
  )
}

export default CategoryList;
