import React from "react";
import '../css/header.css';
import '../css/subheader.css';
import {BiUser,BiSolidUser} from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { Subheader } from "./SubHeader";
import { Search } from "./Search";
import { BasketButton } from "./BasketButton";

export class Header extends React.Component
{
    render(){
        let anchorLink
        if(localStorage.getItem("loggedIn")){
            anchorLink= <a href="/account"><BiUser className="icon"></BiUser> </a>
        }
        else{
            anchorLink=<a href="/login"><BiUser className="icon"></BiUser> </a>
        }
        return(
        <div>
            <div className="header">
            <a href="/"><img className="logo" src="https://galaxyinsurance.ru/upload/2022/03/29/logo_png-(2).png"/></a>
                <Search></Search>
                <div className="icon_container">
                    <BasketButton></BasketButton>
                    <div className="enter">
                        {anchorLink}
                    </div>
                </div>
            </div>
            <Subheader></Subheader>
        </div>)
    }
}