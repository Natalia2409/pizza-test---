import React from "react";
import menu from "./menu";
import Pizza from "./Pizza";

function PizzaList() {
    return (
        <div className="pizzaList">
            <h1>Menu</h1>
            {Object.keys(menu).map( key => {
                return (
                    <Pizza key={key} id={key} name={key} img={menu[key].img[key]} pizza={menu[key]} />
                )
            })}
        </div>
    )
}

export default PizzaList;
