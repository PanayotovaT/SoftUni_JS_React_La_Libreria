import { useState } from 'react';


const Modal = ({ 
  closeModal,
  deleteHandler
 }) => {


  return (
    <div className="modal-background">
      <div className="modal-header">
        <div className="header-btn-container">
          <button className="x-btn" onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="header-title-container">
          <h2>Are you sure you want to delete this item?</h2>
        </div>
      </div>
      <div className="modal-body">
          <p>Title: {book.title}</p>
          <p>Category: {book.category}</p>
          <p>Author: {book.author}</p>
      </div>
      <div className="modal-footer">
        <button onClick={() => closeModal(false)}> Cancel </button>
        <button onClick={() =>deleteHandler(book.id)}> Delete Item</button>
      </div>
    </div>
  );
}

export default Modal;