import React from 'react';
import { BsSearch } from 'react-icons/bs';
// import Select from 'react-select';
// import options from '../assets/categoriesObj';

function InputAndSearch() {
  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     borderBottom: '1px dotted pink',
  //     color: state.isSelected ? 'red' : 'blue',
  //     // padding: 20,
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 300,
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';
  //     return { ...provided, opacity, transition };
  //   },
  // };

  return (
    <div className="">
      <form className="d-flex flex-row justify-content-center p-3">
        <div className="">
          <input />
        </div>
        <div className="justify-content-center">
          <BsSearch />
        </div>
      </form>
    </div>
  );
}

export default InputAndSearch;
