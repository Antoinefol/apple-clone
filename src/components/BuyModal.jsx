import React, { useState, useEffect, useContext } from "react";
import StoreContext from "./storeContext";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BuyModal(props) {
  const myObject = JSON.parse(props.products);
  const [selectedRAMOption, setSelectedRAMOption] = useState(
    myObject.options?.RAM ? Object.keys(myObject.options.RAM)[0] : 0
  );
  const [selectedRAMPrice, setSelectedRAMPrice] = useState(
    myObject.options?.RAM && myObject.options.RAM[selectedRAMOption]
      ? myObject.options.RAM[selectedRAMOption].prix
      : 0
  );
  const [selectedStorageOption, setSelectedStorageOption] = useState(
    myObject.options?.stockage ? Object.keys(myObject.options.stockage)[0] : 0
  );
  const [selectedStoragePrice, setSelectedStoragePrice] = useState(
    myObject.options?.stockage &&
      myObject.options.stockage[selectedStorageOption]
      ? myObject.options.stockage[selectedStorageOption].prix
      : 0
  );
  const [totalPrice, setTotalPrice] = useState(myObject.prix);

  const { setNewConfig, newConfig } = useContext(StoreContext);

  useEffect(() => {
    const newPrice =
      myObject.prix +
      (selectedRAMPrice ? selectedRAMPrice : 0) +
      (selectedStoragePrice ? selectedStoragePrice : 0);
    setTotalPrice(newPrice);
    const newConfig = {
      product: myObject,
      selectedRAMOption: selectedRAMOption,
      selectedRAMPrice: selectedRAMPrice,
      selectedStorageOption: selectedStorageOption,
      selectedStoragePrice: selectedStoragePrice,
      totalPrice: newPrice,
    };
    setNewConfig(newConfig);
  }, [
    selectedRAMPrice,
    selectedStoragePrice,
    myObject,
    selectedRAMOption,
    selectedStorageOption,
    setNewConfig,
    newConfig,
  ]);

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
        <button className="Add" onClick={props.onAdd}>
          Ajouter au panier
        </button>
      </div>
      <div className="right">
        {myObject.screen && <p>Ecran de {myObject.screen}</p>}
        {myObject.options && (
          <div>
            {Object.entries(myObject.options).map(
              ([optionName, options], index) => (
                <div key={optionName}>
                  <p>{optionName}:</p>
                  {Object.keys(options).map((option, index) => (
                    <div key={option}>
                      <input
                        type="radio"
                        id={option}
                        name={optionName}
                        value={option}
                        defaultChecked={index === 0}
                        onChange={
                          optionName === "RAM"
                            ? handleRAMChange
                            : handleStorageChange
                        }
                      />
                      <label htmlFor={option}>
                        {options[option].taille} (+{options[option].prix}€)
                      </label>
                    </div>
                  ))}
                </div>
              )
            )}
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
