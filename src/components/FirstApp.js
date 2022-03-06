import React from 'react';

const regard = 'Saludo';
// const regard = ['Saludo 1', 'Saludo 2']; //Work
// const regard = false; Not work
// const regard = { text: ''}; Not work

const FirstApp = () => {
  return (
    <>
      <h1>{regard} World</h1>
      <p>Mi primera app</p>
    </>
  );
};

export default FirstApp;
