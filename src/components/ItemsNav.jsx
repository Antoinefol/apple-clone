import React,{ useState } from "react";
import {storeData} from "./StoreData.js";




export function StoreComponent({ Data }) {
  let prevType = null;
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const onStoreSelectorClick = (type) => {
    // Mettre à jour le type de produit sélectionné
    setSelectedType(type);

    // Filtrer les produits correspondants au type sélectionné
    const products = storeData.filter(item => item.type === type)
                             .flatMap(item => item.product);
    setSelectedProducts(products);
  }

  return (
    <div>
      <div className="StoreNav">
        {storeData &&
          storeData.map((item, index) => {
            if (item.type !== prevType) {
              prevType = item.type;
              return (
                <div
                  className="StoreSelector"
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
    <div className="item" key={index}>
      <div className="images">
        <img className="itemImg" src={product.productImage} alt="" />
      </div>
      <div className="text">
        <div className="div presentation">
          <p>{product.name}</p>
          <p>{product.prix}</p>
          <button className="Buy">Ajouter au panier</button>
        </div>
        {product.screen || product.puce || product.RAM || product.stockage || product.autonomie ? (
          <div className="div caracteristiques">
            <h1>Caractéristiques</h1> 
            {product.screen && <p>{product.screen}</p>}
            {product.puce && <p>{product.puce}</p>}
            {product.RAM && <p>{product.RAM}</p>}
            {product.stockage && <p>{product.stockage}</p>}
            {product.autonomie && <p>{product.autonomie}</p>}
          </div>
        ) : null}
        {product.dimensions?.Largeur || product.dimensions?.Hauteur || product.dimensions?.Profondeur || product.dimensions?.Poids ? (
          <div className="div dimensions">
            <h1>Dimensions</h1>
            {product.dimensions?.Largeur && <p>{product.dimensions.Largeur}</p>}
            {product.dimensions?.Hauteur && <p>{product.dimensions.Hauteur}</p>}
            {product.dimensions?.Profondeur && <p>{product.dimensions.Profondeur}</p>}
            {product.dimensions?.Poids && <p>{product.dimensions.Poids}</p>}
          </div>
        ) : null}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

  

  
  
  
  
  
  
  
