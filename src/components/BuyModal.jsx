import React, { useState, useEffect } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BuyModal(props) {
  const myObject = JSON.parse(props.products);
  const [selectedRAMOption, setSelectedRAMOption] = useState(null);
  const [selectedRAMPrice, setSelectedRAMPrice] = useState(0);
  const [selectedStorageOption, setSelectedStorageOption] = useState(null);
  const [selectedStoragePrice, setSelectedStoragePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(myObject.prix);

  useEffect(() => {
    const newPrice =
      myObject.prix +
      (selectedRAMPrice ? selectedRAMPrice : 0) +
      (selectedStoragePrice ? selectedStoragePrice : 0);
    setTotalPrice(newPrice);
  }, [selectedRAMPrice, selectedStoragePrice]);

  const handleRAMChange = (event) => {
    const option = event.target.value;
    setSelectedRAMOption(option);
    setSelectedRAMPrice(myObject.options.RAM[option].prix);
  };

  const handleStorageChange = (event) => {
    const option = event.target.value;
    setSelectedStorageOption(option);
    setSelectedStoragePrice(myObject.options.stockage[option].prix);
  };

  return (
    <div className="Modal">
      <FontAwesomeIcon
        className="close"
        icon={faClose}
        onClick={props.onClose}
      />
      <div className="left">
        <h1>{myObject.name}</h1>
        <img className="aperçu" src={myObject.productImage} alt="" />
        <p className="price">Prix : {totalPrice}€</p>
        <button className="Add">Ajouter au panier</button>
      </div>
      <div className="right">
        {myObject.screen && <p>Ecran de {myObject.screen}</p>}
        {myObject.options && myObject.options.RAM && (
          <div>
            <p className="cat">Ram:</p>
            {Object.keys(myObject.options.RAM).map((option, index) => (
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  name="RAM"
                  value={option}
                  defaultChecked={index === 0}
                  onChange={handleRAMChange}
                />
                <label htmlFor={option}>
                  {myObject.options.RAM[option].taille} (+
                  {myObject.options.RAM[option].prix}€)
                </label>
              </div>
            ))}
          </div>
        )}
        {myObject.options && myObject.options.stockage && (
          <div>
            <p className="cat">Stockage:</p>
            {Object.keys(myObject.options.stockage).map((option, index) => (
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  name="Stockage"
                  value={option}
                  defaultChecked={index === 0}
                  onChange={handleStorageChange}
                />
                <label htmlFor={option}>
                  {myObject.options.stockage[option].taille} (+
                  {myObject.options.stockage[option].prix}€)
                </label>
              </div>
            ))}
          </div>
        )}
        {myObject.autonomie && <p>{myObject.autonomie}</p>}
        {myObject.gadgets && <p>{myObject.gadgets}</p>}
        {myObject.dimensions && (
          <div className="dimensions">
            <p className="cat">dimensions:</p>
            <p>Hauteur: {myObject.dimensions.Hauteur}</p>
            <p>Largeur: {myObject.dimensions.Largeur}</p>
            <p>Profondeur: {myObject.dimensions.Profondeur}</p>
            <p>Poids: {myObject.dimensions.Poids}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyModal;
