import Link from 'next/link';

export default function Navbar() {   

    return (
    <div className="float-left ml-5 mt-5 text-lg hover:text-yellow-600">
        <Link href="/"><strong>View Categories</strong></Link>
    </div>
  )
}
