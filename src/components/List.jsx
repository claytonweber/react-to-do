export default function List(props) {
  const { toDosProps } = props;
  return (
    <ul>
        {toDosProps.map((toDo) => (
          <li>{toDo.title}</li>
        ))}
      </ul>
  )
}