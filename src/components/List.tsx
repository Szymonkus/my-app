import ListItem from './ListItem';

type ListProps<T> = {
  data: T[];
  columns: string[];
}

function List<T>({ data, columns }: ListProps<T>) {
  return (
    <div className="list-container">
      {data.map((item, index) => (
        <ListItem key={index} item={item} columns={columns} />
      ))}
    </div>
  );
}

export default List;