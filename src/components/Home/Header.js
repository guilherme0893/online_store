import React, { useEffect, useContext } from 'react';
import { BsCartFill, BsCart } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import Dropdown from './DropdownMenu';

function Header(props) {
  const { text } = props;
  const history = useHistory();

  const { cartEmpty, setCartEmpty } = useContext(GlobalContext);

  function onButtonClick() {
    history.push('/shopping-cart');
  }

  const isCartEmpty = () => {
    const products = JSON.parse(localStorage.getItem('productsInCart'));
    if (products > 0 || products === null || products === undefined) {
      setCartEmpty(false);
    } else setCartEmpty(true);
  };

  useEffect(() => {
    isCartEmpty();
  });

  return (
    <header
      data-testid="main-header"
      className="d-flex justify-content-around p-2"
      style={ {
        backgroundColor: 'rgb(54, 69, 79)',
        border: '1px solid black',
      } }
    >
      <div>
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
          { cartEmpty ? (
            <BsCartFill
              onClick={ () => onButtonClick() }
              size="1x"
            />
          )
            : (
              <BsCart
                onClick={ () => onButtonClick() }
                size="1x"
              />
            )}
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
