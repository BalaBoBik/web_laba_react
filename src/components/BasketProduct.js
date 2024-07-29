import React from 'react'
import '../css/basket.css';
import { FaTrashAlt } from "react-icons/fa";

export class BasketProduct extends React.Component
{
    Delete = () =>
    {
        var basket = JSON.parse(localStorage.getItem("products"));
        basket.splice(this.props.index,1)
        localStorage.setItem("products", JSON.stringify(basket));
        localStorage.setItem("productsLen",basket.length);
        window.history.go()
    }
    render()
    {
        return(
            <div>
                <div className='basket_product'>
                    <div>
                        <h1>{this.props.name}</h1>
                        <h2>{this.props.price}</h2>
                        <a href={"/product/"+this.props.id}>Перейти на страницу в магазине</a>
                    </div>
                    <button onClick={this.Delete}><FaTrashAlt className="delete"/></button>

                </div>
            </div>
        )
    }
}
