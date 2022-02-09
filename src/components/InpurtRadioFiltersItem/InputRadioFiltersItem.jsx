import React from "react";
import './InputRadioFiltersItem.css';

const InputRadioFiltersItem = ({id, name, filter, valueItem, handleActive}) => {

    return (
        <>
            <div className="input-radio-filters__container">
                <input type="radio" name="input-filters" id={id} value={valueItem}
                       onChange={(e) => handleActive(e.target.checked)}
                       checked={filter === valueItem ? true : false}
                />
                <label htmlFor={id}>{name}</label>
            </div>
        </>
    );
};

export default InputRadioFiltersItem;
