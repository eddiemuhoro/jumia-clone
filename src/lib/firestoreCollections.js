import { collection } from "firebase/firestore";
import { db } from "./init-firebase";

export const moviesCollectionRef = collection(db, 'movies')
export const productsCollectionRef = collection(db, 'products')