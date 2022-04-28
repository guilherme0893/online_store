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
      className="d-flex justify-content-between p-3"
      style={ {
        backgroundColor: 'rgb(248, 237, 235)',
        border: '1px solid black',
      } }
    >
      <div>
        <Dropdown />
      </div>
      <div
        // style={ { marginLeft: '-60px' } }
        className="d-flex mt-2"
      >
        <Link to="/" className="text-dark" style={ { textDecoration: 'none' } }>
          <h1>
            { text }
          </h1>
        </Link>
      </div>
      <div
        className="d-flex "
      >
        <div
          className="cartDiv"
          style={ { maxWidth: '60px' } }
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
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
