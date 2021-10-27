import Head from 'next/head'
import CategoryList from '../components/CategoryList'
import initFirebase from '../firebase/initFirebase'
import { collection, addDoc } from 'firebase/firestore';
import WriteToCloudFirestore from '../components/cloudFirestore/Write';
initFirebase();

export default function Home() {

  // function addCat() {
  //   const docRef = addDoc(collection(db, "categories"), {
  //     name: "test2"
  //   });
  //   console.log("Document written with ID:", docRef.id);
  // }

  return (
    <div>
      <Head>
        <title>CookBook2.0</title>
        <meta name="description" content="A cookbook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {}
        <WriteToCloudFirestore />
        <CategoryList />
      </div>
    </div>
  )
}
