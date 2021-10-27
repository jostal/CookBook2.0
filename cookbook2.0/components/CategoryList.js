import EditableCategory from './EditableCategory';

function CategoryList(props) {
  return (
    <div className="content-center">
      {props.categories.map((category) => (
        <EditableCategory 
          key={category.category_id}
          id={category.category_id}
          name={category.category_name}
          description={category.description}
        />
      ))}
    </div>
  )
}

export default CategoryList;
