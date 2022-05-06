// import { Button } from 'bootstrap';
import React, { useContext, useEffect } from 'react';
import { Navbar, NavDropdown, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalContext from '../../Context/GlobalContext';

function DropdownMenu() {
  const { categories, setCategories } = useContext(GlobalContext);

  useEffect(() => {
    async function getCategories() {
      const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
      const returnedCategories = await request.json();
      setCategories(returnedCategories);
    }
    getCategories();
  }, [setCategories]);

  return (
    <Navbar
      expand="lg"
      className="border border-dark flex p-3 pt-1 pb-1
        justify-content-center bg-light text-dark navbar-expand-md"
    >
      <NavDropdown>
        <ListGroup>
          {
            categories.map((category, index) => (
              <Link
                key={ index }
                className="pe-auto text-dark p-2 border-bottom"
                style={ { textDecoration: 'none' } }
                to={ `/products/category/${category.id}` }
              >
                {category.name}
              </Link>
            ))
          }
        </ListGroup>
      </NavDropdown>
      Search for categories
    </Navbar>
  );
}

export default DropdownMenu;
