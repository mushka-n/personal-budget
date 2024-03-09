import { Transaction } from '@/types/Transaction';
import { CellContext, ColumnDef } from '@tanstack/react-table';

export const columnDef: ColumnDef<Transaction, any>[] = [
  {
    id: 'title',
    accessorKey: 'title',
    header: 'Title',
    cell: ({ getValue }: CellContext<Transaction, string>) => getValue(),
  },

  {
    id: 'amount',
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ getValue }: CellContext<Transaction, number>) => getValue(),
  },

  {
    id: 'date',
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }: CellContext<Transaction, Date>) =>
      getValue().toLocaleString('ru', { hour12: false }),
  },

  {
    id: 'category',
    accessorKey: 'category',
    header: 'Category',
    cell: ({ getValue }: CellContext<Transaction, string>) => getValue(),
  },
];
