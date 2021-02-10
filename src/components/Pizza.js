import React from "react";
import { useDispatch } from "react-redux";
import { getPizzaName } from "../redux/actions";

function Pizza({ name, img, pizza, id }) {
    const dispatch = useDispatch();

    const getName = (e) => {
        const name = e.target.id;
        return dispatch(getPizzaName(name));
    }

    name = name[0].toUpperCase() + name.substring(1);

    return (
        <div className="pizza">
            <div className="pizza__block">
                <div className="pizza__main">
                    <h1>{name}</h1>
                    <img className="pizza__img" src={img} alt="pizza"/>
                </div>
                <ul className="pizza__lists">
                    {Object.keys(pizza).map(key => {
                        if (key !== "img") {
                            return (
                                <li className="pizza__list" key={key}>{key}</li>
                            )
                        }
                    })}
                </ul>
                <div className="pizza__button">
                    <button id={id} onClick={getName}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Pizza;
