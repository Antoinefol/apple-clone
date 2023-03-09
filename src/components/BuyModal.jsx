import React  from "react";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 function BuyModal(props) {
    
    const myObject = JSON.parse(props.products);
    console.log(myObject)
    return(
        <div className="Modal">
            <FontAwesomeIcon className="close" icon={faClose} onClick={props.onClose} />
           <h1>{myObject.name}</h1>
        </div>
    )
}

export default BuyModal