import './Dropdown.scss';

type DropdownProps = {
  title: string;
};

function Dropdown({ title }: DropdownProps) {
  return (
    <>
      <label htmlFor={title}>Choose {title}:</label>
      <select name={title} id={title}>
        <option value='volvo'>Volvo</option>
        <option value='saab'>Saab</option>
        <option value='mercedes'>Mercedes</option>
        <option value='audi'>Audi</option>
      </select>{' '}
    </>
  );
}

export default Dropdown;
