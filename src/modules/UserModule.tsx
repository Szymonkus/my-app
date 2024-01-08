import { FC } from 'react'
import Header from '../components/Header'
import List from '../components/List'

export type UserModuleProps = {
  moduleType: string;
  header: string;
  columns: string[];
  data: Record<string, any>[];
}

export const UserModule: FC<UserModuleProps> = ({ header, columns, data }) => {
  return (
    <div>
      <Header text={header} />
      <List data={data} columns={columns} />
    </div>
  )
}
