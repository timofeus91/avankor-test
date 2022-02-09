import React from "react";
import './SelectFilters.css';
import SelectFiltersItem from "../SelectFiltersItem/SelectFiltersItem";

const SelectFilters = ({list,filter,handleActive}) => {
    return (

        <select value={filter} onChange={(e) => handleActive(e.target.value)} className="select-filters">
            {list.map(item =>
                <SelectFiltersItem
                    key={item.id}
                    name={item.name}
                    valueItem={item.valueItem}
                />
            )}
        </select>
    );
};

export default SelectFilters;
