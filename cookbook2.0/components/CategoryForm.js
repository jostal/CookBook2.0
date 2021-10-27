import { useState } from 'react';

function CategoryForm(props) {
    const [catName, setCatName] = useState('');
    const [catDesc, setCatDesc] = useState('');
    const buttonText = props.id ? 'Update Category' : 'Create Category';

    function handleFormSubmit = (evt) => {
        evt.preventDefault();
        props.onFormSubmit(props.props.categories);
    }

  return (
    <div className="content-center">
        <form onSubmit={handleFormSubmit()}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Category Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"  value={catName} onChange={setCatName(evt.target.value)} placeholder="Category Name"></input>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
                    <input class="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" value={catDesc} onChange={setCatDesc(evt.target.value)} placeholder="Enter a Description"></input>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleFormSubmit()}>
                        Submit
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={props.onCancelClick()}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CategoryForm;
