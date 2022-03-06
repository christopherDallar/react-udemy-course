import React from 'react';
import PropTypes from 'prop-types';

// props means properties

const FirstApp = ({ regard }) => {
  return (
    <>
      <h1>{regard} World</h1>
      <p>Mi primera app</p>
    </>
  );
};

FirstApp.propTypes = {
  regard: PropTypes.string.isRequired,
  // other: PropTypes.number.isRequired
};

export default FirstApp;
