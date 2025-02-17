import React, { useState } from 'react';
import './InputField.scss';

function InputField() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <label htmlFor='inputField'>
        <input type='text' onChange={handleChange} value={inputValue} />
        <p>Tjoho! You wrote: {inputValue}</p>
      </label>
    </>
  );
}

export default InputField;
