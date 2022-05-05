import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from './DropdownMenu';

function Header(props) {
  const { text } = props;
  const history = useHistory();

  function onButtonClick() {
    history.push('/shopping-cart');
  }

  // const isCartEmpty = () => {
  //   const products = JSON.parse(localStorage.getItem('productsInCart'));
  //   if (products) {
  //     return false;
  //   }
  // };

  return (
    <header
      data-testid="main-header"
      className="d-flex justify-content-around p-2"
      style={ {
        backgroundColor: 'rgb(54, 69, 79)',
        border: '1px solid black',
      } }
    >
      <div className="">
        <Dropdown />
      </div>
      <div>
        <Link to="/" className="text-white" style={ { textDecoration: 'none' } }>
          <h1>
            { text }
          </h1>
        </Link>
      </div>
      <div
        className=""
        style={ { maxWidth: '50px' } }
      >
        <Link href="null">
          <BsCartFill
            onClick={ () => onButtonClick() }
            size="1x"
          />
          {/* // shopping cart icon chage for the futre updated */}
          {/* { isCartEmpty === false ? (
            <BsCart
              onClick={ () => onButtonClick() }
              size="1x"
            />
          )
            : (
              <BsCartFill
                onClick={ () => onButtonClick() }
                size="1x"
              />
            )} */}
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
