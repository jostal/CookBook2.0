import { useState } from 'react';
import Router from 'next/router';
import { v1 as uuidv1 } from 'uuid';

function CategoryForm(props) {
    const [catName, setCatName] = useState(props.name) || '';
    const [catDesc, setCatDesc] = useState(props.description) || '';
    const buttonText = props.id ? 'Update Category' : 'Create Category';

    function handleFormSubmit (evt) {
        evt.preventDefault();
        if (buttonText === "Update Category") {
            console.log("Updating Category...");
            fetch('https://cookbook-api-jt.herokuapp.com/api/categories/' + props.id + '/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"category_id": props.id, "category_name": catName, "description": catDesc})
            })
        } else {
            evt.preventDefault();
                console.log("Creating Category...");
                fetch('https://cookbook-api-jt.herokuapp.com/api/categories/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"category_id": uuidv1(), "category_name": catName, "description": catDesc})
                })
        }
        
        props.onFormSubmit(evt);
    }

  return (
    <div className="content-center">
        <form onSubmit={(evt) => {handleFormSubmit(evt)}}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-br from-blue-50  via-blue-100 to-blue-200 mt-5">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Category Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"  value={catName} onChange={(evt) => {setCatName(evt.target.value)}} placeholder="Category Name"></input>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
                    <textarea class="shadow appearance-none border border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" value={catDesc} onChange={(evt) => {setCatDesc(evt.target.value)}} placeholder="Enter a Description"></textarea>
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

export default CategoryForm;
