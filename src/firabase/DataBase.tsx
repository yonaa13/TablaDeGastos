import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  getFirestore,
  doc,
  deleteDoc,
  addDoc,
  getDoc,
  DocumentData,
  updateDoc,
  
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const dataBase = async () => {
  const querySnapshot = await getDocs(collection(db, "gastos"));
  let docs: any[] = [];
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });

  return docs;
};
//Datos de fireStore
export const data = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    dataBase()
      .then((res) => setData(res))
      .catch((err) => console.error(err))
      .finally();
  }, [data]);
  return data;
};
//guardar nuevo dato
export const guardarDato = async (collectionValue: string, data: any) => {
  try {
    await addDoc(collection(db, collectionValue), {
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
};
//borrar un dato segun id
export const deleteUser = async (id: any) => {
  await deleteDoc(doc(db, "gastos", id));
};
//obtener un dato
export const getdata = (collectionValue: string, id: string ) => {
  const docRef = doc(db, collectionValue, id);
  return getDoc(docRef)
};
//editar un dato

export const updateFirebaseDoc = async (collectionValue: string,id: string,newdoc: DocumentData) => {
  let docRef = doc(db, collectionValue, id);
  return await updateDoc(docRef, newdoc);
};



