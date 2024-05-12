import { useState, useEffect } from "react";
import { CollectionReference, Timestamp, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { auth, db } from "../../lib/firebaseConfig";

export type FormType = {
  id: string;
  date: Timestamp;
  amount: string;
  type: string;
  category: string;
  paymentType: string;
  description: string;
  uid: string | undefined;
};

const useFetchPaymentsData = () => {
  const [payments, setPayments] = useState<FormType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const listsRef = collection(
          db,
          "recordlist"
        ) as CollectionReference<FormType>;
        const data = await getDocs(
          query(
            listsRef,
            where("uid", "==", auth.currentUser?.uid),
            orderBy("date", "desc")
          )
        );
        setPayments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching Payments:", error);
      }
    };

    fetchPayments();
  }, []);

  return { payments, loading, error };
};

export default useFetchPaymentsData;
