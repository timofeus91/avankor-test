import React from "react";
import './InputRadioFilters.css';
import InputRadioFiltersItem from "../InpurtRadioFiltersItem/InputRadioFiltersItem";

const InputRadioFilters = ({list, filter, handleActive}) => {
    return (
        <form className="input-radio-filters">
            {list.map(item =>
                <InputRadioFiltersItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    filter={filter}
                    valueItem={item.valueItem}
                    handleActive={() =>
                        handleActive(item.valueItem)
                    }/>
            )}
        </form>

    );
};

export default InputRadioFilters;
