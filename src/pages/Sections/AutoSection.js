import React from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Footer } from "../../components/Footer";
import { ProductTable } from "../../components/ProductTable";
import '../../css/page.css';


export class AutoSection extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            products:[]  
        }
        this.getProductList = this.getProductList.bind(this)
        this.getProductList(this)
    }

    getProductList = (that) => {
        fetch('http://localhost:5288/api/Products/auto') 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({products: jsonStr});})
        .catch(error => console.error(error));
    }
    render()
    {
        return(
            <div>
                <Header></Header>
                <div className="main">
                    <Sidebar></Sidebar>
                    <div className="page">
                        <ProductTable products = {this.state.products}/>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}