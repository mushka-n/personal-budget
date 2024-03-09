export type Transaction = {
  id: string;
  title: string;
  date: DateTime;
  type: 'income' | 'expense' | 'saving';
  amount: number;
  description: string;
};
