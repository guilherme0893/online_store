import React, { Component } from 'react';

class CommentBox extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="Email"
            type="email"
            name="email"
          />
          <input
            name="evaluation"
            type="number"
            min="0"
            max="5"
          />
          <textarea
            name="comments"
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
          />
          <button
            type="submit"
          >
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
