/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useContext, useState } from 'react';
import { BsCartFill, BsCart } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';
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
    if (!products || products.length === 0) {
      setCartEmpty(true);
    } else setCartEmpty(false);
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
    <nav
      data-testid="main-header"
      style={ {
        border: '1px solid black',
        backgroundColor: 'rgb(76, 92, 104)',
      } }
      className="navbar-expand-lg d-flex justify-content-lg-between"
    >
      <div className="container-fluid navbar">
        <a className="navbar-brand">
          <Link to="/" className="text-white" style={ { textDecoration: 'none' } }>
            <h1>
              { text }
            </h1>
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-nav">
            <Form
              className="d-flex h-25 justify-content-lg-center m-auto"
            >
              <FormControl
                style={ {
                  marginLeft: '50px',
                } }
                type="search"
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
            <Dropdown />
            <Link
              className="m-3"
              href="null"
              style={ {
                maxWidth: '30px',
                marginRight: '60px',
              } }
            >
              { cartEmpty === true ? (
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
                )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
