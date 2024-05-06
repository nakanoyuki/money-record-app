import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";

export type PaymentData = {
  date: Date;
  amount: string;
  type: string;
  category: string;
  paymentType: string;
  description: string;
  uid: string | undefined;
};

export const addPaymentDateToFirebase = async (paymentData: PaymentData) => {
  try {
    const docRef = await addDoc(collection(db, "recordlist"), paymentData);
  } catch (error) {
    console.error("Error fetching paymentData:", error);
  }
};
