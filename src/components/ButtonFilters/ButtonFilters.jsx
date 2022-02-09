import React from "react";
import './ButtonFilters.css';

const ButtonFilters = ({filterVisible}) => {
    return (
        <section className="button-filters">
            <h1 className="button-filters__title">Choose what to show</h1>
            <div className="button-filters__container">
                <button type="button" onClick={() => {
                    filterVisible('description');
                }} className="button-filters__button">Description
                </button>
                <button type="button" onClick={() => {
                    filterVisible('reportType');
                }} className="button-filters__button">ReportType
                </button>
            </div>
        </section>
    );
};

export default ButtonFilters;
