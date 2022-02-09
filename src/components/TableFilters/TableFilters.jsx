import React from "react";
import './TableFilters.css';
import TableFiltersItem from "../TableFiltersItem/TableFiltersItem";

const TableFilters = ({list, filter, handleActive}) => {


    return (
        <table className="table-filters">
            <caption>All element table</caption>
            <tbody>
            <tr className="table-filters__list">
                {list.map(item =>
                    <TableFiltersItem
                        key={item.id}
                        name={item.name}
                        filter={filter}
                        handleActive={() => {
                            handleActive(item.valueItem);
                        }}
                        valueItem={item.valueItem}/>
                )}
            </tr>
            </tbody>
        </table>
    );
};

export default TableFilters;
