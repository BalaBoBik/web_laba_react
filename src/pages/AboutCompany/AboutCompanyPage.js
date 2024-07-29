import React from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import {InfoTable} from "./InfoTable"
import { InfoList } from "./InfoList";
import '../../css/page.css'
import { Footer } from "../../components/Footer";
import {Slider} from "../../components/Slider";
export class AboutCompanyPage extends React.Component
{
    render()
    {
        return(
            <div>
                <Header></Header>
                <div className="main">
                    <Sidebar></Sidebar>
                    
                    <div className ="page">
                        <h2>О компании</h2>
                        <div className="img_text_container">
                            
                            <img src="https://bestmif.ru/uploads/768/18241670226573.jpg"/>
                            <p> 
                                ООО Страховая Компания «Гелиос» – это универсальная технологичная страховая компания, оказывающая услуги на финансовом рынке с 1993 года.
                                <br/>
                                <br/>
                                Обеспечивать комплексную защиту финансовых интересов клиентов Компании позволяют лицензии Банка России на осуществление ОСАГО, добровольного имущественного страхования, добровольного личного страхования (кроме страхования жизни), а также лицензия на перестрахование, выданные бессрочно.
                                <br/>
                                <br/>
                                Страховая Компания «Гелиос» – член Всероссийского Союза Страховщиков (ВСС), Российского Союза Автостраховщиков (РСА), Национального союза агростраховщиков (НСА).
                            </p>
                        </div>
                        <InfoTable/>
                        <InfoList/>
                        <Slider/>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}