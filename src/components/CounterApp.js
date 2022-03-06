import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0); // [].length == 2

  console.log(counter);

  //
  const handleAdd = () => {
    // setCounter(counter + 1); // Is equal to code bellow
    setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
