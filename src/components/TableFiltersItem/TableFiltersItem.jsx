import React from "react";
import './TableFiltersItem.css';

const TableFiltersItem = ({name, filter, valueItem,handleActive}) => {

    const isActive = filter === valueItem;
    const classNames = isActive ? 'table-filter__item table-filter__item_active' : 'table-filter__item';

    return (
        <td className={classNames} onClick={handleActive}>{name}</td>
    );
};



export default TableFiltersItem;
