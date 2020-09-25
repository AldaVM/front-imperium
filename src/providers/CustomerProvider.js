import { useState } from "react";
import CustomerContext from "../contexts/CustomerContext";

export default function CustomerProvider({ children }) {
  const [customer, setCustomer] = useState({});

  function updateCustomer(currentCustomer) {
    setCustomer(currentCustomer);
  }

  return (
    <CustomerContext.Provider value={{ customer, updateCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}
