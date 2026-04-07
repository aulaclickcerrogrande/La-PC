import { collection, addDoc, getDocs, updateDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./config";

export const collections = {
    EXTERNAL: "external_components",
    INTERNAL: "internal_components"
};

export const syncDataToFirestore = async (data, collectionName) => {
    const promises = data.map(item => setDoc(doc(db, collectionName, item.id), item));
    await Promise.all(promises);
};

export const getAllComponents = async (collectionName) => {
    const colRef = collection(db, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateComponent = async (collectionName, id, updates) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, updates);
};
