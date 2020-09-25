import { useState } from "react";
import PaymentContext from "../contexts/PaymentContext";

export default function PaymentProvider({ children }) {
  const [paidMethod, setPaidMethod] = useState(null);

  function updatePaidMethod(currentPaidMethod) {
    setPaidMethod(currentPaidMethod);
  }

  return (
    <PaymentContext.Provider value={{ paidMethod, updatePaidMethod }}>
      {children}
    </PaymentContext.Provider>
  );
}
