import React from "react";

import {
  faShoppingCart,
  faClose,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart(props) {
  const handleRemoveFromCart = (itemToRemove) => {
    // Enlever l'élément sélectionné du tableau cartItems
    const updatedCartItems = props.Items.filter(
      (item) => item.id !== itemToRemove.id
    );
    props.setCartItems(updatedCartItems);
  };

  return (
    <>
      {props.isClicked ? (
        <div className="Inventory">
          <div className="closeButton">
            <FontAwesomeIcon
              className="close"
              icon={faClose}
              onClick={props.onClose}
            />
          </div>
          <div className="itemsList">
            {props.Items.length > 0 ? (
              props.Items.map((item) => (
                <div className="cartItem" key={item.id}>
                  <img
                    className="cartImage"
                    src={item.product.productImage}
                    alt=""
                  />
                  <p>{item.product.name}</p>
                  <p>{item.totalPrice}€</p>
                  <button
                    className="delete"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <FontAwesomeIcon className="trash" icon={faTrash} />
                  </button>
                </div>
              ))
            ) : (
              <div className="emptyCart">Panier vide</div>
            )}
          </div>
          <div className="Total">
            Total :{" "}
            {props.Items.reduce((acc, item) => {
              return acc + item.totalPrice;
            }, 0)}{" "}
            €
          </div>
        </div>
      ) : (
        <div className="popUp" onClick={props.onOpen}>
          <FontAwesomeIcon className="popUpCart" icon={faShoppingCart} />
          {props.Items.length >= 1 && (
            <span className="itemCount">{props.Items.length}</span>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
