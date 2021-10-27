

export default function CategoryCard(props) {    // Card style category - displays category info and edit/delete options
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.name}</div>
          <p class="text-gray-700 text-base">
              {props.description}
          </p>
      </div>
    </div>
  )
}
