import React from "react";
import './InputRadioFiltersItem.css';

const InputRadioFiltersItem = ({id, name, filter, valueItem,handleActive}) => {

    return (
        <>
            <div className="input-radio-filters__container">
                <input onClick={handleActive} type="radio" name="input-filters" id={id} value={valueItem}
                       checked={filter === valueItem ? true : false}/>
                <label for={id}>{name}</label>
            </div>
        </>
    );
};

export default InputRadioFiltersItem;
