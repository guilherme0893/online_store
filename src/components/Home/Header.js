import React, { useEffect, useContext } from 'react';
import { BsCartFill, BsCart } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormControl, Button, Nav } from 'react-bootstrap';
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
    <Nav
      data-testid="main-header"
      className="d-flex justify-content-evenly p-3"
      style={ {
        backgroundColor: 'rgb(54, 69, 79)',
        border: '1px solid black',
      } }
    >
      <Form
        className="d-flex"
      >
        <FormControl
          style={ {
            marginLeft: '50px',
          } }
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button disabled>Search</Button>
      </Form>
      <Link to="/" className="text-white" style={ { textDecoration: 'none' } }>
        <h1>
          { text }
        </h1>
      </Link>
      <Dropdown />
      <Link href="null" style={ { maxWidth: '30px' } }>
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
    </Nav>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
