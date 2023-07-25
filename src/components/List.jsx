import Item from '@/components/Item';

export default function List({ toDosProps }) {
  //destructuring props
  return (
    <ul>
        {toDosProps.map((toDo) => (
          // <li>{toDo.title}</li> - moved to Item.jsx

          //needs a key to render properly
          <Item key={toDo.id} itemProp={toDo} />
        ))}
      </ul>
  )
}