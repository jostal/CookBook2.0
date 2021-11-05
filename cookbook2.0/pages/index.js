import Head from 'next/head'
import CategoryList from '../components/CategoryList'

export default function Home({ categories }) {

  // function addCat() {
  //   const docRef = addDoc(collection(db, "categories"), {
  //     name: "test2"
  //   });
  //   console.log("Document written with ID:", docRef.id);
  // }

  function deleteCategory() {

  }

  function getCategory() {
    
  }

  return (
    <div>
      <Head>
        <title>CookBook2.0</title>
        <meta name="description" content="A cookbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CategoryList 
          categories={categories}
          onDeleteClick={deleteCategory()}
          //onUpdateClick={updateCategory()}
          onCategoryClick={getCategory()}
        />
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  var categories;
  await fetch('https://cookbook-api-jt.herokuapp.com/api/categories/')
        .then(res => res.json())
        .then(data => {categories = data});
  return {
    props: {
      categories,
    },
  };
};
