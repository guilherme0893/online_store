import React from 'react';
import { useHistory } from 'react-router-dom';

function BackHomeButton() {
  const history = useHistory();
  return (
    <div>
      <button
        className="btn btn-light p-3 b border-dark rounded"
        type="button"
        onClick={ () => history.push('/') }
      >
        Voltar para home
      </button>
    </div>
  );
}

export default BackHomeButton;
