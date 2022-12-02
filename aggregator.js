import React from "react";

function AggregateComp(props) {
    return (
        <div class="cart-card">
        <h1>My Character</h1>
          {Object.keys(props.cart.prods).map((itemName) => (<p>{props.cart.prods[itemName]} {itemName}</p>))}

          <h3>Total Survivability Points</h3>
          <p>{props.cart.total}</p>
        </div>
    )
}

export default AggregateComp;
