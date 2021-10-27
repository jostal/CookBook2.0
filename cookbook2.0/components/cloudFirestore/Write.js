import firebase from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
const db = getFirestore()

const WriteToCloudFirestore = () => {
    const sendData = () => {
        try {
            const docRef = addDoc(collection(db, "categories"), {
                name: "test2"
            });
            console.log("doc added ", docRef.id);
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }
    return (
        <button onClick={sendData()}>Send Data</button>
    )
}

export default WriteToCloudFirestore;