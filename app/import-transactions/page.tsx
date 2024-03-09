'use client';

import pb from '@/database';
import { AlfaBankTransaction } from '@/types/BankSpecific/AlfaBank';
import moment from 'moment';
import { useState } from 'react';
import XLSX from 'xlsx';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ImportTransactionsPage = () => {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const onSubmitFile = async () => {
    if (!file) return;

    const bankAccounts = await pb.collection('bank_account').getFullList();
    console.log(bankAccounts);

    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      const bstr = e.target!.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      const data = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        range: 1,
        raw: true,
        defval: null,
      }) as AlfaBankTransaction[];

      console.log(data);

      data.map(async (unparsedTransaction) => {
        const date = moment(unparsedTransaction[0], 'dd.MM.yyyy');
        const bank_account_name = unparsedTransaction[2];
        const bank_account_number = unparsedTransaction[3]?.toString();
        const description = unparsedTransaction[6];
        const amount = unparsedTransaction[7];
        const type = unparsedTransaction[12];

        if (!date || !amount || !type) return;

        let bankAccount = bankAccounts.find(
          ({ number }) => number === bank_account_number
        );
        if (!bankAccount && bank_account_name && bank_account_number) {
          bankAccount = await pb.collection('bank_account').create(
            {
              name: bank_account_name,
              number: bank_account_number,
            },
            { $autoCancel: false }
          );
        }

        pb.collection('transactions').create(
          {
            date: date,
            type: type === 'Пополнение' ? 'income' : 'expense',
            amount,
            description,
            bank_account: bankAccount!.id,
          },
          { $autoCancel: false }
        );
      });
    };

    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  };

  return (
    <main>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='file'>CSV File</Label>
        <Input id='file' type='file' onChange={onFileChange} />
      </div>

      {file && <Button onClick={onSubmitFile}>Upload a file</Button>}
    </main>
  );
};

export default ImportTransactionsPage;
