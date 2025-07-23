//REACT
import React, { createContext, useContext, useState } from 'react';


//TYPES
export type DebtLevel = 0 | 1 | 2;

export type DebtContextType = {
  debtLevel: DebtLevel;
  setDebtLevel: (lvl: DebtLevel) => void;
};

//CONTEXT
const DebtContext = createContext<DebtContextType | undefined>(undefined);

//FUNCTION
export function DebtProvider({ children }: { children: React.ReactNode }) {

  //STATE
  const [debtLevel, setDebtLevel] = useState<DebtLevel>(0);

  //JSX
  return (
    <DebtContext.Provider value={{ debtLevel, setDebtLevel }}>
      {children}
    </DebtContext.Provider>
  );
}

//HOOK
export function useDebt() {
  const ctx = useContext(DebtContext);
  if (!ctx) throw new Error('useDebt must be used within DebtProvider');
  return ctx;
}
