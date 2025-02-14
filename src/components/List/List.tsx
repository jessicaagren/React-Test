import './List.scss';

type ListProps = {
  title: string;
  items: string[];
  isNumbered: boolean;
};

function List({ title, items, isNumbered }: ListProps) {
  const ListTag = isNumbered ? 'ol' : 'ul';

  return (
    <>
      <h2>{title}</h2>
      <ListTag>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListTag>
    </>
  );
}

export default List;
