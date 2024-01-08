type StatusProps = {
  total: number,
  paid: number
}

export default function Status({ total, paid }: StatusProps) {
  const isFullyPaid = total == paid;
  const style = isFullyPaid ? { backgroundColor: 'green' } : { backgroundColor: 'red' };

  return (
    <div style={style}>
      <h1>Total$: {total}</h1>
      <h1>Paid$: {paid}</h1>
    </div>
  )
}
