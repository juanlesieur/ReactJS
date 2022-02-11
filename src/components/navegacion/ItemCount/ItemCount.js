import React, {useState} from 'react'
import  "../ItemCount/ItemCount.css";

export default function ItemCount(onAdd) {
    const [itemCount, setItemCount] = useState(0)

    const updateItem = () => {
        if(itemCount < 5) {
            setItemCount(itemCount + 1)
            onAdd(itemCount + 1)
        }
    }

    const removeItem = () => {
        itemCount > 0 && setItemCount(itemCount - 1)
    }

    return(
        <div className="item-count__buttons">
            <button variant="outlined" color="base" onClick={removeItem}>-</button>
            <p id='itemCount'>{itemCount}</p>
            <button variant="outlined" color="base" onClick={updateItem} >+</button>
        </div>
    )
};
