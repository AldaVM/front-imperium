import { createContext } from 'react';

const RootContext = createContext({
  customer: null,
  turns: [],
  currentTurn: null
});

export default RootContext; 