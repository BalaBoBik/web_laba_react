import React from "react";
import '../css/footer.css';
export class Footer extends React.Component
{
    render()
    {
        return(
            <div className="footer">
                <p>
                    ©   Все права защищены <br/>
                    ООО Страховая Компания «Гелиос»
                    <br/>
                </p>
                <a href="https://vk.com/gelios.insurance">
                    <img  src="https://skgelios.ru/static/icons/vk_icon.svg"/>
                </a>
                <a href="http://t.me/gelios_insurance">
                    <img src="https://skgelios.ru/static/icons/telegram_icon.svg"/>
                </a>
                <a href="https://dzen.ru/skgelios">
                    <img src="https://skgelios.ru/static/icons/dzen-icon.png"/>
                </a>
                <a href="https://ok.ru/group/61160973140099" >
                    <img src="https://skgelios.ru/static/icons/ok-icon.png"/>
                </a>
            </div>
        )
    }
}