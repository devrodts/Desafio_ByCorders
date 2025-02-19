export interface Transaction {
    id: number;
    type: number;
    date: string;
    value: number;
    cpf: string;
    card: string;
    time: string;
    storeOwner: string;
    storeName: string;
    nature: 'Entrada' | 'Saída' | null;
    sign: '+' | '-';
  }

 export interface StoreSummary {
    storeName: string;
    storeOwner: string;
    transactions: Transaction[];
    totalBalance: number;
  }