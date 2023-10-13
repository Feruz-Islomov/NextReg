import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";

export async function PostingData(collectioName, obj) {
  const ref = collection(db, collectioName);
  await addDoc(ref, obj);
}
export const GettingData = async (colName, setData, ok, setMsgId) => {
  const ref = collection(db, colName);

  //   setLoading(true);
  try {
    const data = await getDocs(ref);
    // const fileteredData = data.docs.map((doc) => ({
    //   ...doc.data(),
    // }));
    //
    // if (fileteredData[0].dataToUpdate === undefined) return;
    // setData(fileteredData[0].dataToUpdate);
    // setLoading(false);
    const fileteredData = data.docs.map((doc) => doc.data());
    const val = fileteredData[0].dataToUpdate;
    if (fileteredData.length === 0 || val === undefined) {
      return;
    }
    setData(val);
    if (ok) {
      setMsgId(val[0].id);
    }
  } catch (err) {
    console.error(err);
    // setLoading(false);
  }
};
export async function updateMyDocument(dataToUpdate) {
  const ref = doc(db, "chatbox", "grb8fpjYC6gpYCcJJDnC");

  try {
    // Update the document; if it doesn't exist, it will be created
    await updateDoc(ref, { dataToUpdate });
    // console.log("Document updated or created successfully!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}
export async function emptyMyDocument() {
  const ref = doc(db, "chatbox", "grb8fpjYC6gpYCcJJDnC");
  try {
    // Update the document; if it doesn't exist, it will be created
    await updateDoc(ref, { dataToUpdate: [] });
    // console.log("Document updated or created successfully!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}
