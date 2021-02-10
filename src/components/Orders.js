import React from "react";
import { useSelector } from "react-redux";

function Orders() {

    const list = useSelector(state => state.list.list);

    return (
        <div className="orders">
            <h1 className="orders__title">List of ordered pizza</h1>
            <hr />
            <ol className="orders__lists">
                {list ? (
                    list.map(li => {
                        return (
                            <li className="orders__list" key={`f${(~~(Math.random()*1e8)).toString(16)}`}>{li}</li>
                        )
                    })
                ) : ""}
            </ol>
        </div>
    )
}

export default Orders;
