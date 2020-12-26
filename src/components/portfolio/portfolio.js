import React, {useState} from "react";
import IsoTopeGrid from "react-isotope";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";


const filtersDefault = [
    {"label": "all", "isChecked": true},
    {"label": "test", "isChecked": false},
    {"label": "test1", "isChecked": false},
    {"label": "chart", "isChecked": false},
    {"label": "tile", "isChecked": false}
];

const cardsLayout = [
    {
        "id": "a",
        "row": 0,
        "col": 0,
        "w": 1,
        "h": 1,
        "filter": ["test", "chart"]
    },
    {
        "id": "b",
        "row": 0,
        "col": 1,
        "w": 1,
        "h": 1,
        "filter": ["test1", "tile"]
    },
    {
        "id": "c",
        "row": 0,
        "col": 3,
        "w": 1,
        "h": 1,
        "filter": ["test", "chart"]
    },
    {
        "id": "d",
        "row": 1,
        "col": 0,
        "w": 1,
        "h": 1,
        "filter": ["test1", "tile"]
    },
    {
        "id": "e",
        "row": 1,
        "col": 1,
        "w": 1,
        "h": 1,
        "filter": ["test", "tile"]
    },
    {
        "id": "f",
        "row": 1,
        "col": 2,
        "w": 1,
        "h": 1,
        "filter": ["test1", "chart"]
    },
    {
        "id": "h",
        "row": 2,
        "col": 0,
        "w": 1,
        "h": 1,
        "filter": ["test1", "chart"]
    }
];

const Portfolio = (props) => {

    // Local state for managing filtering logic
    const [filters, updateFilters] = useState(filtersDefault);

    // Filter change handler
    const onFilter = event => {
        const {
            target: {value, checked}
        } = event;

        updateFilters(value);
    };

    return (
        <section>
            <h1 className='text-center mb-5 mt-5'>Portfolio</h1>
            <ToggleButtonGroup type="checkbox" value={filters} onChange={onFilter}>
                {filters.map(f => (
                    <ToggleButton key={`${f.label}_key`} value={f.label} value={1}>{f.label}</ToggleButton>
                ))}
            </ToggleButtonGroup>
            <IsoTopeGrid
                gridLayout={cardsLayout} // gridlayout of cards
                noOfCols={3} // number of columns show in one row
                unitWidth={200} // card width of 1 unit
                unitHeight={100} // card height of 1 unit
                filters={filters} // list of selected filters
            >
                {cardsLayout.map(card => (
                    <div key={card.id} className={card.filter[0]}>
                        {card.id}
                    </div>
                ))}
            </IsoTopeGrid>
        </section>
    )
}

export default Portfolio