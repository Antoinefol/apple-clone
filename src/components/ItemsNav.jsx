import React, { useState, useEffect } from "react";
import { storeData } from "./StoreData.js";
import BuyModal from './BuyModal.jsx';

export function StoreComponent({ Data }) {
  let prevType = null;
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [showBlurBackground, setShowBlurBackground] = useState(false);
  
  const handleClick = (name) => {
  setShowModal(true);
  setShowBlurBackground(true);
  const product = storeData
    .filter((item) => item.product.find(p => p.name === name))
    .flatMap((item) => item.product)
    .find(p => p.name === name);
    const serializedObject = JSON.stringify(product);
  setSelectedItem(serializedObject);
};

  const handleClose = () => {
    setShowModal(false);
    setShowBlurBackground(false);
  };

  const onStoreSelectorClick = (type) => {
    // Mettre à jour le type de produit sélectionné
    setSelectedType(type);

    // Filtrer les produits correspondants au type sélectionné
    const products = storeData
      .filter((item) => item.type === type)
      .flatMap((item) => item.product);
    setSelectedProducts(products);
  };

  useEffect(() => {
    // Appeler la fonction onStoreSelectorClick avec la valeur "Mac" lors du chargement initial de la page
    onStoreSelectorClick("Mac");
  }, []); // [] en tant que 2ème argument pour que la fonction ne soit appelée qu'une seule fois au chargement initial de la page

  return (
    <div>
      <div className={`StoreNav ${showBlurBackground ? "blurred-background" : ""}`}>
        {storeData &&
          storeData.map((item, index) => {
            if (item.type !== prevType) {
              prevType = item.type;
              return (
                <div
                className={`StoreSelector ${selectedType === item.type ? "active" : ""}`}
                  type={item.type}
                  key={index}
                  onClick={() => onStoreSelectorClick(item.type)}
                >
                  <img className="categorie" src={item.frontImage} alt="" />
                  <p>{item.type}</p>
                </div>
              );
            }
          })}
      </div>
      <div className="ItemsWrap">
        {selectedProducts.map((product, index) => (
          <div className={`item ${showBlurBackground ? "blurred-background" : ""}`} key={index} >
            <h1>{product.name}</h1>
            <div className="images">
              <img className="itemImg" src={product.productImage} alt="" />
            </div>
            <div className="text">
              <p>{product.prix}</p>
              <button className="Buy" onClick={() => handleClick(product.name)}>Acheter</button>
              
            </div>
          </div>
        ))}{ShowModal && <BuyModal products={selectedItem} onClose={handleClose}/>}
      </div>
      
    </div>
  );
};

  

  
  
  
  
  
  
  
