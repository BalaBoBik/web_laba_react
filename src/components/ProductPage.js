import React from "react";
import { json, useParams } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import "../css/product_page.css"
export const ProductDescriptionPage = (props) => {

    let { id } = useParams();
    return(
        <Description id={id}></Description>
    )
}
class Description extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            product:{},
            productLink: 'http://localhost:5288/api/Products/one/'+this.props.id.toString(),
            agreement: false,
        }
        
        this.inputClick = this.inputClick.bind(this) 
        this.TakeProduct = this.TakeProduct.bind(this)
        this.TakeProduct(this)
    }
    TakeProduct = (that) => {
        fetch(that.state.productLink) 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({product: jsonStr});})
        .catch(error => console.error(error));
    }
    inputClick = (event) =>
    {
        event.preventDefault();
        if(localStorage.getItem("loggedIn"))
        {
            if (this.state.agreement)
            {
                fetch("http://localhost:5288/api/User/CheckProduct/"+localStorage.getItem("profileId")+"/"+this.state.product.id)
                .then(function(response){return response.json();})
                .then((jsonStr)=>
                {
                    if(!jsonStr)
                {
                    var newBasket=JSON.parse(localStorage.getItem("products"))
                    if (newBasket === null) {
                        localStorage.setItem("products", JSON.stringify([this.state.product]));
                    }
                    else
                    {
                        if(newBasket.find(el => el.id === this.state.product.id))
                        {
                            alert("Вы уже добавили этот товар в корзину")
                        }
                        else
                        {
                            newBasket.push(this.state.product)
                            localStorage.setItem("products", JSON.stringify(newBasket));
                            localStorage.setItem("productsLen",newBasket.length)
                            window.history.go()     
                        }
                    }
                }
                else alert("Вы уже оформили этот товар");
                })
            }
            else
            {
                alert("Нам необходима ваше соглашение на обработку персональных данных")
            }
        }
        else
        {
            alert("Войдите в аккаунт или зарегистрируйте новый")
        }
    }
    render()
    {
        return(
            <div>
                <Header></Header>
                <div className="main">
                    <Sidebar></Sidebar>
                    <div className="product_page">
                        <h1>{this.state.product.name}</h1>
                        <h2>{this.state.product.subheader!=="null"?this.state.product.subheader:""}</h2>
                        <div className="img_price_container">
                            <img src={this.state.product.photoUrl}></img>
                            <div className="price">
                                <form>
                                    <h2>{this.state.product.price} рублей</h2>
                                    <div><button onClick={this.inputClick}>Оформить</button></div>
                                    <div>
                                        <input type="checkbox"onChange={(e) => this.setState({agreement: !this.state.agreement})}/> 
                                        Согласен на обработку персональных данных
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text">{this.state.product.description}</div>
                        <br/>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}