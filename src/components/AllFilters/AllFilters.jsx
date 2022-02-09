import React, {useState} from "react";
import './AllFilters.css';
import SelectFilters from "../SelectFilters/SelectFilters";
import InputRadioFilters from "../InputRadioFilters/InputRadioFilters";
import TableFilters from "../TableFilters/TableFilters";
import {filterArray} from "../../utils/constants";

const AllFilters = () => {
    const [filterState, setFilterState] = useState('');

    const handleActive = (item) => {
        setFilterState(item);
    };

    return (
        <section className="all-filters">
            <SelectFilters
                list={filterArray}
                filter={filterState}
                handleActive={handleActive}
            />
            <InputRadioFilters
                list={filterArray}
                filter={filterState}
                handleActive={handleActive}
            />
            <TableFilters
                list={filterArray}
                filter={filterState}
                handleActive={handleActive}
            />
        </section>
    );
};

export default AllFilters;
