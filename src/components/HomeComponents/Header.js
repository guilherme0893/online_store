import React from 'react';
import { BsCart } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from './DropdownMenu';

function Header() {
  // const { categoryId } = props;
  const history = useHistory();

  function onButtonClick() {
    history.push('/shopping-cart');
  }
  return (
    <header
      data-testid="main-header"
      className="d-flex justify-content-between border p-3"
      style={ {
        backgroundColor: 'rgb(76, 92, 104)',
      } }
    >
      <div>
        <Dropdown />
      </div>
      <div
        style={ { marginLeft: '-60px' } }
        className="d-flex"
      >
        <Link to="/" className="text-light" style={ { textDecoration: 'none' } }>
          <h1>
            Online Store
          </h1>
        </Link>
      </div>
      <div
        className="d-flex "
      >
        <button
          type="button"
          onClick={ () => onButtonClick() }
        >
          Shopping Cart
          {' '}
          <BsCart />
        </button>
      </div>
    </header>
  );
}

// Header.propTypes = {
//   categoryId: PropTypes.number.isRequired,
// };

export default Header;
