import Head from 'next/head'
import CategoryList from '../components/CategoryList'

export default function Home({ categories }) {
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
