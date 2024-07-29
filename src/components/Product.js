import React from "react";
import default_img from "../img/default_img.png"
import '../css/product.css'


export class Product extends React.Component
{
    
    render(){
        return(
            <div className="product">
                <div className="img_container">
                    <img src={this.props.imageUrl}></img>
                </div>
                <div>
                    <h3>{this.props.name}</h3>
                    <h2>{this.props.price} рублей</h2>
                    <a href={this.props.url+this.props.id}><button>Перейти</button></a>
                </div>
            </div>
        )
    }
}