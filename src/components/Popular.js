import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import menu from "./menu";

function Popular() {

    const [popular, setPopular] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const list = useSelector(state => state.list.list);

    const getIngredients = () => {
        if (popular) {
            const arr = Object.entries(menu).find(elem => elem.find(el => el === popular));
            const newArr = [];
            Object.keys(arr[1]).map(key => {
                if (key !== "img") {
                    return (
                        newArr.push(key)
                    )
                }
            })
            setIngredients(newArr)
        }
        console.log(ingredients)
    }

    function getPopularElement(array) {
        var count = 1, tempCount;
        var popular = array[0];
        var temp = 0;
        for (var i = 0; i < (array.length - 1); i++) {
          temp = array[i];
          tempCount = 0;
          for (var j = 1; j < array.length; j++) {
            if (temp == array[j]) {
              tempCount++;
            }
          }
          if (tempCount > count) {
            popular = temp;
            count = tempCount;
          }
        }
        return popular;
    }

    useEffect(() => {
        if (list !== []) {
            setPopular(getPopularElement(list))
        }
    });

    return (
        <div className="popular">
            <h1 className="popular__title">The most popular Pizza</h1>
            <hr />
            <div className="popular__pizza">{popular ? (popular[0].toUpperCase() + popular.substring(1)) : ""}</div>
            <button className="popular__button" onClick={getIngredients}>Get ingredients</button>
            <div className="popular__ingredients">{((ingredients !== []) ? ingredients.join(", ") : "")}</div>
        </div>
    )
}

export default Popular;
