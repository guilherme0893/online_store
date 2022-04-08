import React, { useContext, useEffect } from 'react';
import GlobalContext from '../Context/GlobalContext';

function Categories() {
  const { categories, setCategories } = useContext(GlobalContext);

  useEffect(() => {
    async function getCategories() {
      const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
      const result = await request.json();
      setCategories(result);
      console.log(result);
    }
    getCategories();
  }, [setCategories]);

  return (
    <ul>
      {categories.map((category) => (
        <li key={ category.id }>
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
