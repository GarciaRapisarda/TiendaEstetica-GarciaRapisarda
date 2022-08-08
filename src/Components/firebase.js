
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc, query } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMQqxZ7kxqMw5ts3cLzl-NlXI2yWQqAxo",
  authDomain: "cursocoderreactestetica.firebaseapp.com",
  projectId: "cursocoderreactestetica",
  storageBucket: "cursocoderreactestetica.appspot.com",
  messagingSenderId: "584504875342",
  appId: "1:584504875342:web:bbebdca35c6e0c7039661f",
  measurementId: "G-37XK6YWF61"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/* export const getItemDetail = () => {
const docRef = doc(db, "Items");
const docSnap =  getDoc(docRef);
console.log(docRef)

return getDoc(docSnap);
} */
export const getItemById = async (productId) => {
  

  return (await getDoc(doc(db, "Items", productId))).data();
};

export const getItemList = () => {
const colRef = collection(db, "Items");
const q = query(colRef)
return getDocs(q);
}
