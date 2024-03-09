// prettier-ignore
export type AlfaBankTransaction = [
  string,                         // 0  - date
  string,                         // 1  - date_completed
  string,                         // 2  - bank_account_name
  string,                         // 3  - bank_account_number
  string,                         // 4  - card_name
  string,                         // 5  - card_number
  string,                         // 6  - description
  number,                         // 7  - amount
  string,                         // 8  - currency
  string,                         // 9  - status
  string,                         // 10 - category
  string,                         // 11 - mss
  'Пополнение' | 'Списание',      // 12 - type
  string,                         // 13 - comment
  number,                         // 14 - cashback
  string,                         // 15 - cashback_type
];
