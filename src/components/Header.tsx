type HeaderPropsTypes = {
  text: string
}

export default function Header(props: HeaderPropsTypes) {
  const { text } = props;

  return (
    <h1>{text}</h1>
  )
}
