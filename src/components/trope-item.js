// TODO: create a component that displays a single bakery item
import React from "react";
import Button from '@mui/material/Button';

function TropeItem(props) {
    return(

        <div className="card flex flex-col">
        <img src={props.item.image} alt="trope item"/>
        <div className="container">
            <h2>{props.item.name} </h2>
            <h3>Likelihood of Survival: {props.item.survivability}</h3>
            <h3>Type: {props.item.type}</h3>
            <h3>Trope: {props.item.trope}</h3>
            <p>{ props.item.description}</p>
                <Button variant="contained" onClick={() => props.update(props.index)}>
                    <b>ADD</b>
                </Button>
        </div>
    </div>
        
    )
}


export default TropeItem;