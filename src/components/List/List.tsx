import './List.scss';

type ListProps = {
  title: string;
  items: string[];
};

function List({ title, items }: ListProps) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li value={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
