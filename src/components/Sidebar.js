import React from "react";
import '../css/sidebar.css';
export class Sidebar extends React.Component
{
    render()
    {
        return(
        <div className="sidebar">
            <a href="/">О компании</a>
            <a href="/feedback">Обратная связь</a>
            <a href="">Офисы</a>
            <a href="">Корпоративным клиентам</a>
            <a href="">Партнерам</a>
            <a href="">Пресс-центр</a>
            <a href="">Работа в Гелиос</a>
            <a href="">Документы</a>
            <a href="">Контакты</a>
        </div>)
    }
}