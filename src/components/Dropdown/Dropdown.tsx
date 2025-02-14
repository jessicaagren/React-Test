import './Dropdown.scss';

type DropdownProps = {
  label: string;
  id: string;
  items: string[];
};

export const cars = ['Volvo', 'Saab', 'Honda', 'Hyundai'];

export const cookies = [
  'Chocolate Chip',
  'White Chocolate Macadadamia',
  'Sugar Cookie',
  'Gingerbread',
];

function Dropdown({ label, id, items }: DropdownProps) {
  return (
    <>
      <label htmlFor={label}>Choose {label}:</label>
      <select name={label} id={id}>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Dropdown;
