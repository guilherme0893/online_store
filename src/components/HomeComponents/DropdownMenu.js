import React, { useContext, useEffect } from 'react';
import { Navbar, NavDropdown, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';

function DropdownMenu() {
  const history = useHistory();
  const { categories, setCategories } = useContext(GlobalContext);

  useEffect(() => {
    async function getCategories() {
      const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
      const returnedCategories = await request.json();
      setCategories(returnedCategories);
      console.log(returnedCategories);
    }
    getCategories();
  }, [setCategories]);

  return (
    <Navbar
      expand="lg"
      className="border border-dark flex
        justify-content-center bg-light text-dark"
    >
      <Navbar.Collapse className="text-dark">
        <NavDropdown className="text-dark" title="Categories">
          <ListGroup className="text-dark">
            {
              categories.map((category, index) => (
                <ListGroup.Item
                  key={ index }
                  className="p-1"
                  onClick={ () => history.push(`/products/category/${category.id}`) }
                >
                  {category.name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DropdownMenu;
