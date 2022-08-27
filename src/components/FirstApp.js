import React from 'react';
import PropTypes from 'prop-types';

// props means properties

const FirstApp = ({ regard, subtitle }) => {
  return (
    <>
      <h1> {regard} </h1>
      <p>Mi primera app</p>
      <p className="subtitle">{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  regard: PropTypes.string.isRequired,
  subtitle: PropTypes.any,
  // other: PropTypes.number.isRequired
};
FirstApp.defaultProps = {
  subtitle: 'I am subtitle',
  // subtitle: 'Soy un subtitle',
};

export default FirstApp;
