import React, { useState } from 'react';
import './CheckBox.scss';

function Checkbox() {
  const [inputValue, setInputValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <>
      <label htmlFor='checkbox'>
        Checkbox:
        <input type='checkbox' name='myCheckbox' onChange={handleChange} />
      </label>
      <p>Tjoho! Checkbox is: {inputValue ? 'clicked' : 'not clicked'}</p>
    </>
  );
}

export default Checkbox;
