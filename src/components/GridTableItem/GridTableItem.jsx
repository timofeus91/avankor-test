import React from "react";
import './GridTableItem.css';

const GridTableItem = ({textFromData}) => {
    return (

            <td className="grid-table__item">{textFromData}</td>

    )
};

export default GridTableItem;
