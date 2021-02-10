import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrder, getOrder } from "../redux/actions";

function Order() {

    const dispatch = useDispatch();
    const [orderList, setOrderList] = useState(true);

    const order = useSelector(state => state.currentPizza.currentPizza);

    const removeOrder = () => {
        return dispatch(clearOrder());
    }

    const submitOrder = () => {
        setOrderList(!orderList)
        removeOrder();
    }

    return (
        <div className="order">
            <h1 className="order__title">Your order</h1>
            <hr />
            {orderList ? (
                <ul>
                    {order ? order.map(ord => {
                            return (
                                <li key={`f${(~~(Math.random()*1e8)).toString(16)}`} className="order__block">
                                    <div className="order__inside">
                                        <h2>You add:</h2>
                                        <div className="order__meal">{ord}</div>
                                    </div>
                                </li>
                            )
                    }) : ""}
            </ul>
            ) : <div className="order__thanks">Thanks for your order</div>}
            <div className="order__buttons">
                <button onClick={submitOrder} className="order__submit">{orderList ? "SUBMIT" : "BACK"}</button>
                {orderList ? (
                    <button onClick={removeOrder} className="order__clear">CLEAR</button>
                ) : ""}
            </div>
        </div>
    )
}

export default Order;
