import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import AddTransactionForm from './AddTransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([
    // Sample data for initial transactions
    { date: '2023-01-01', description: 'Groceries', category: 'Food', amount: 50 },
    { date: '2023-01-02', description: 'Rent', category: 'Housing', amount: 1000 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar onSearch={setSearchTerm} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
