import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const updateUserData = async (uid) => {
  const docRef = doc(db, "Products", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return data;
  } else {
    console.log("No such document!");
  }
};


export const updateProductPost = async (id, updatedData) => {
  try {
    const imageRef = ref(
      storage,
      `uploads/images/${Date.now()}-${updatedData?.image.name}`
    );
    const uploadResults = await uploadBytes(imageRef, updatedData?.image);
    const ProductRef = doc(db, "Products", id);
    await updateDoc(ProductRef, {
      ...updatedData,
      image: uploadResults.ref.fullPath,
    });
  } catch (error) {
    console.error(error);
  }
};