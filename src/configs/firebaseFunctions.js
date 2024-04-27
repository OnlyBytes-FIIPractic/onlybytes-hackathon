import { collection, getDocs, query, where, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getUseridByEmail = async (email) => {
  const user = await getDocs(query(collection(db, "users"), where("email", "==", email)));
  if (user.docs.length === 0) {
    return null;
  }
  return user.docs[0].id;
}

export const getFamilyByUserId = async (userId) => {
  const familiesRef = collection(db, "families");
  const q = query(familiesRef, where("members", "array-contains", userId));

  try {
    const querySnapshot = await getDocs(q);
    const families = [];
    querySnapshot.forEach((doc) => {
      families.push({ id: doc.id, ...doc.data() });
    });
    return families.length ? families[0] : null;
  } catch (error) {
    console.error("Error fetching family documents:", error);
    return null;
  }
}

export const getPhotosByUserId = async (userId) => {
  const user = await getDocs(query(collection(db, "users", userId, "photos")));
  return user.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

