import React, { useEffect, useContext, useState } from 'react';
import { BsCartFill, BsCart } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormControl, Button, Nav } from 'react-bootstrap';
import GlobalContext from '../../Context/GlobalContext';
import Dropdown from './DropdownMenu';

function Header(props) {
  const { text } = props;
  const history = useHistory();
  const [inputValue, setInput] = useState('');

  const { cartEmpty, setCartEmpty, setSearchProduct } = useContext(GlobalContext);

  function onButtonClick() {
    history.push('/shopping-cart');
  }

  const isCartEmpty = () => {
    const products = JSON.parse(localStorage.getItem('productsInCart'));
    if (products > 0 || products === null || products === undefined) {
      setCartEmpty(false);
    } else setCartEmpty(true);
  };

  const onInputChange = (event) => setInput(event.target.value);

  const onSearchButtonClick = async (search) => {
    search = inputValue;
    try {
      const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${search}`);
      const result = await request.json();
      setSearchProduct(result.results);
    } catch (error) {
      console.error(error);
    }
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
          onChange={ onInputChange }
        />
        <Button
          onClick={ onSearchButtonClick }
        >
          Search
        </Button>
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
