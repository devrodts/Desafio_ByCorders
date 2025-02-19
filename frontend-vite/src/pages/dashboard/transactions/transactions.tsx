import { useState, useEffect } from 'react';
import styles from './transactions.module.css';
import { getAllTransactions } from '../../../utils';

interface Transaction {
  id: number;
  type: number;
  date: string;
  value: string;
  cpf: string;
  card: string;
  time: string;
  storeOwner: string;
  storeName: string;
}

interface StoreSummary {
  storeName: string;
  storeOwner: string;
  transactions: Transaction[];
  total: number;
}

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactions = await getAllTransactions();
        setTransactions(transactions);
      } catch (error) {
        console.error('Erro ao buscar transações:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  

  const getTransactionNature = (type: number) => {
    const types: { [key: number]: { description: string, nature: 'entrada' | 'saída' } } = {
      1: { description: 'Débito', nature: 'entrada' },
      2: { description: 'Boleto', nature: 'saída' },
      3: { description: 'Financiamento', nature: 'saída' },
      4: { description: 'Crédito', nature: 'entrada' },
      5: { description: 'Recebimento Empréstimo', nature: 'entrada' },
      6: { description: 'Vendas', nature: 'entrada' },
      7: { description: 'Recebimento TED', nature: 'entrada' },
      8: { description: 'Recebimento DOC', nature: 'entrada' },
      9: { description: 'Aluguel', nature: 'saída' }
    };
    return types[type] || { description: 'Desconhecido', nature: 'entrada' };
  };

  const groupTransactionsByStore = (): StoreSummary[] => {
    const storeMap = new Map<string, StoreSummary>();

    transactions.forEach(transaction => {
      const { nature } = getTransactionNature(transaction.type);
      const value = parseFloat(transaction.value);
      
      if (!storeMap.has(transaction.storeName)) {
        storeMap.set(transaction.storeName, {
          storeName: transaction.storeName,
          storeOwner: transaction.storeOwner,
          transactions: [],
          total: 0
        });
      }

      const storeSummary = storeMap.get(transaction.storeName)!;
      storeSummary.transactions.push(transaction);
      storeSummary.total += nature === 'entrada' ? value : -value;
    });

    return Array.from(storeMap.values());
  };

  const formatDate = (dateStr: string) => {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return `${day}/${month}/${year}`;
  };

  const formatTime = (timeStr: string) => {
    return `${timeStr.substring(0, 2)}:${timeStr.substring(2, 4)}:${timeStr.substring(4, 6)}`;
  };

  const filteredSummaries = groupTransactionsByStore().filter(summary =>
    summary.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    summary.storeOwner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Transações por Loja</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar por loja ou proprietário..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {loading ? (
        <div className={styles.loading}>Carregando...</div>
      ) : (
        <div className={styles.storesGrid}>
          {filteredSummaries.map((summary) => (
            <div key={summary.storeName} className={styles.storeCard}>
              <div className={styles.storeHeader}>
                <h2>{summary.storeName}</h2>
                <p>Proprietário: {summary.storeOwner}</p>
                <p className={`${styles.total} ${summary.total >= 0 ? styles.positive : styles.negative}`}>
                  Saldo: R$ {summary.total.toFixed(2)}
                </p>
              </div>

              <div className={styles.transactionsTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Hora</th>
                      <th>Tipo</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.transactions.map((transaction) => {
                      const { description, nature } = getTransactionNature(transaction.type);
                      return (
                        <tr key={transaction.id}>
                          <td>{formatDate(transaction.date)}</td>
                          <td>{formatTime(transaction.time)}</td>
                          <td>{description}</td>
                          <td className={nature === 'entrada' ? styles.positive : styles.negative}>
                            R$ {parseFloat(transaction.value).toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;