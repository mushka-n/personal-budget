import pb from '@/database';
import { ApiResponse } from '@/types/ApiResponse';
import { Transaction } from '@/types/Transaction';

import TransactionsTable from './TransactionsTable';

const TransactionHistoryPage = async () => {
  const result = (await pb
    .collection('transactions')
    .getList(1, 50)) as ApiResponse<Transaction>;

  console.log(result);
  return (
    <main>
      <TransactionsTable data={result.items} />
    </main>
  );
};

export default TransactionHistoryPage;
