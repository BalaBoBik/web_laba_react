import React from "react";
import { Product } from "./Product";
import '../css/product_table.css';
export class ProductTable extends React.Component
{
    render()
    {
        return(
            <div className="product_table">
                {this.props.products.map((el) => (
                    <Product name={el.name} id={el.id} imageUrl={el.photoUrl} price={el.price} url="product/"/>
                ))}
            </div>
        )
    }
}