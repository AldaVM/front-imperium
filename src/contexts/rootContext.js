import { createContext } from 'react';

const RootContext = createContext({
  customer: null,
  turns: [],
  currentTurn: null,
  paidMethod: null,
  idCustomer: null
});

export default RootContext; 