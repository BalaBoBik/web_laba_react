import React from "react";
import '../css/basket_button.css'
import basketImage from "../img/basket.png"

export class BasketButton extends React.Component
{
    constructor(props)
    {
        super(props)
        {
            this.state = {
                number: 0,
            }
        }
    }
    countProducts()
    {
        if (localStorage.getItem("products") === null)
        {
            this.state.number=0
        }
        else
        {
            var newBasket=JSON.parse(localStorage.getItem("products"))
            this.state.number=newBasket.length;
        }
    }
    render()
    {
        return(
            <a href="/basket">
                <button className="basket" id="basket">
                    <img className="basket__image" src={basketImage} alt="basket" />
                </button>
                <div className="basket__num" id="basket_num">{localStorage.getItem("productsLen")}</div>
            </a>
        )
    }
}