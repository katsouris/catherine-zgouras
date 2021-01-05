import React, {useState} from "react";
import IsoTopeGrid from "react-isotope";
import {ButtonGroup, Container, Row, ToggleButton} from "react-bootstrap";
import ProfileCard from "../general/profileCard";


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
        "filter": ["test", "chart"]
    },
    {
        "id": "b",
        "filter": ["test1", "tile", "test"]
    },
    {
        "id": "c",
        "filter": ["test", "chart"]
    },
    {
        "id": "d",
        "filter": ["test1", "tile"]
    },
    {
        "id": "e",
        "filter": ["test", "tile"]
    },
    {
        "id": "f",
        "filter": ["test1", "chart"]
    },
    {
        "id": "h",
        "filter": ["test1"]
    }
];

const Portfolio = (props) => {

    // Local state for managing filtering logic
    const [filters, updateFilters] = useState(filtersDefault);

    // Filter change handler
    const onFilter = e => {
        updateFilters(
            filters.map(f => {
                if (f.label === e.currentTarget.value) {
                    return {
                        ...f,
                        isChecked: true
                    };
                } else {
                    return {
                        ...f,
                        isChecked: false
                    };
                }
            }))
    };

    return (
        <section>
            <h1 className='text-center mb-5 mt-5'>Portfolio</h1>
            <Row>
                <ButtonGroup toggle className='m-auto'>
                    {filters.map(f => (
                        <ToggleButton
                            className='mr-2'
                            checked={f.isChecked}
                            onChange={onFilter}
                            key={`${f.label}_key`}
                            value={f.label}
                            type="radio"
                        >{f.label}</ToggleButton>
                    ))}
                </ButtonGroup>
            </Row>
            <Container>
                <IsoTopeGrid
                    gridLayout={cardsLayout} // gridlayout of cards
                    filters={filters} // list of selected filters
                    noOfCols={3}
                    unitHeight={501} // card height of 1 unit
                    unitWidth={300}
                >
                    {cardsLayout.map(card => (
                        <ProfileCard key={card.id}/>
                    ))}
                </IsoTopeGrid>
            </Container>
        </section>
    )
}

export default Portfolio