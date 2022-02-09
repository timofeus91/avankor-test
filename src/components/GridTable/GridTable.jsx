import React from "react";
import './GridTable.css';
import GridTableItem from "../GridTableItem/GridTableItem";

const GridTable = ({list}) => {
    return (
        <table className="grid-table">
            <tbody className="grid-table__tbody">
            <tr className="grid-table__tr">
                {list.map(item =>
                    <GridTableItem
                        textFromData={item.visibleText}
                        key={item.entryPointDocument}
                    />)}
            </tr>
            </tbody>

        </table>
    );
};

export default GridTable;
