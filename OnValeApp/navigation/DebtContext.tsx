//REACT
import React, { createContext, useContext, useState } from 'react';

export type DebtLevel = 0 | 1 | 2;

type DebtContextType = {
  debtLevel: DebtLevel;
  setDebtLevel: (lvl: DebtLevel) => void;
};

const DebtContext = createContext<DebtContextType | undefined>(undefined);

export function DebtProvider({ children }: { children: React.ReactNode }) {
  const [debtLevel, setDebtLevel] = useState<DebtLevel>(0);

  return (
    <DebtContext.Provider value={{ debtLevel, setDebtLevel }}>
      {children}
    </DebtContext.Provider>
  );
}

export function useDebt() {
  const ctx = useContext(DebtContext);
  if (!ctx) throw new Error('useDebt must be used within DebtProvider');
  return ctx;
}
