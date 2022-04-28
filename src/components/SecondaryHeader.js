import React from 'react';
import PropTypes from 'prop-types';

function SecondaryHeader(props) {
  const { text } = props;
  return (
    <div>
      <h6
        className="p-2 d-flex justify-content-center"
        style={ { backgroundColor: 'RGB(254, 197, 187)' } }
      >
        {text}
      </h6>
    </div>);
}

SecondaryHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SecondaryHeader;
