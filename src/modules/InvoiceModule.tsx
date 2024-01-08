import { FC } from 'react'
import Header from '../components/Header'
import List from '../components/List';
import Status from '../components/Status';

export type InvoiceModuleProps = {
  moduleType: string;
  header: string;
  columns: string[];
  data: Record<string, any>[];
  total: number;
  paid: number;
}

export const InvoiceModule: FC<InvoiceModuleProps> = ({ header, columns, data, total, paid }) => {

  return (
    <div>
      <Header text={header} />
      <List data={data} columns={columns} />
      <Status total={total} paid={paid} />
    </div>
  )
}
