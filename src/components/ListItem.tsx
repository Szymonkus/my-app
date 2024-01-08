type ListItemProps<T> = {
  item: T;
  columns: string[];
}

function ListItem<T>({ item, columns }: ListItemProps<T>) {
  return (
    <div className="list-item">
      <hr />
      {columns.map((column, index) => (
        <div key={index} className="list-item-column">
          {(item as any)[column]}
        </div>
      ))}
      <hr />
    </div>
  );
}

export default ListItem;