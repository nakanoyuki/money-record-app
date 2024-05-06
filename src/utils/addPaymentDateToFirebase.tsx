import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

export const addPaymentDateToFirebase = async (paymentData: any) => {
  try {
    const docRef = await addDoc(collection(db, "recordlist"), paymentData);
  } catch (error) {
    console.error("Error fetching paymentData:", error);
  }
};
