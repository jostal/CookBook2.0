import Image from 'next/image';

export default function RecipeCard(props) {    // Card style category - displays category info and edit/delete options
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
      <div className="ml-5 mr-5">
        <div className="flex mt-3 mb-3">
          <div>
            <span className="font-bold text-xl mb-2">{props.name}</span>
          </div>
          <div className="absolute right-0">
            <span onClick={(evt) => {props.onEditClick(evt)}}><Image src="/editIcon.png" width="15" height="15"></Image></span>
            <span className="ml-2" onClick={(evt) => {props.onDeleteClick(evt)}}><Image src="/garbageIcon.png" width="15" height="15"></Image></span>
          </div>
        </div>
          
          <div className="text-gray-700 text-base mb-3">
              {props.description}
              <span onClick={(evt) => {props.onRecipeClick(evt)}} className="absolute right-2 bottom-1 text-lg"><Image src="/arrowIcon.webp" width="20" height="20"></Image></span>
          </div>
          
      </div>
    </div>
  )
}
