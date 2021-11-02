import Image from 'next/image';

export default function CategoryCard(props) {    // Card style category - displays category info and edit/delete options
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
      <div className="text-center">
        <div className="flex px-10 py-4">
          <div>
            <span className="font-bold text-xl mb-2">{props.name}</span>
          </div>
          <div className="absolute right-0">
            <span onClick={(evt) => {props.onEditClick(evt)}}><Image src="/editIcon.png" width="15" height="15"></Image></span>
            <span className="ml-2" onClick={(evt) => {props.onDeleteClick(evt)}}><Image src="/garbageIcon.png" width="15" height="15"></Image></span>
          </div>
        </div>
          
          <p className="text-gray-700 text-base">
              {props.description}
          </p>
      </div>
    </div>
  )
}
