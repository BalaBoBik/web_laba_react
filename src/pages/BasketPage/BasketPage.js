import React from 'react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Footer } from '../../components/Footer'
import '../../css/page.css';
import { BasketProduct } from '../../components/BasketProduct';

export class BasketPage extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          products: [],
          price: 0,
        };
      }
      
      componentDidMount() {
        const result = this.TakeProducts();
        this.setState({products:result});
        };
      
      TakeProducts = () => {
        var basket = JSON.parse(localStorage.getItem("products"));
        return basket;
      }
      Buy =() => {
        this.state.products.map((el) => {
            fetch("http://localhost:5288/api/Products/buy/"+localStorage.getItem("profileId")+"/"+el.id, {method: 'PUT'})
        })

        alert("Ждите, когда менеджер свяжется с вами")
        localStorage.setItem("products", null)
        window.history.pushState({}, undefined, "/");
        window.history.go()
      }
      
    
    render(){
        return(
            <div>
                <Header></Header>
                <div className="main">
                    <Sidebar></Sidebar>
                    <div className="page">
                        {
                            this.state.products.length!==0?
                            this.state.products.map((el,index) => (
                            <BasketProduct name={el.name} id={el.id} price={el.price} index={index}/>))
                            :<div>В вашей корзине пока нет товаров</div>
                        }
                        <button onClick={this.Buy}>Купить</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

