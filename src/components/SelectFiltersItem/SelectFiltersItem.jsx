import React from "react";
import './SelectFiltersItem.css';

const SelectFiltersItem = ({name, valueItem}) => {

    return (
        <option value={valueItem}>{name}</option>
    )
}

export default SelectFiltersItem;
