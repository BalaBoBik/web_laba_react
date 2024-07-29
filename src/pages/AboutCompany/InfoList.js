import React from 'react';
export class InfoList extends React.Component
{
    render()
    {
        return(
            <div>
                <h3>Список предоставляемых услуг:</h3>
                <ul>
                    <li>Авто
                        <ul>
                            <li>КАСКО
                                <ul>
                                    <li>Гелиос-Электрик</li>
                                    <li>Демократичное КАСКО</li>
                                    <li>Практичное КАСКО</li>
                                </ul>
                            </li>
                            <li>Шёлковый путь</li>
                            <li>ОСАГО</li>
                        </ul>
                    </li>
                    <li>Имущество
                        <ul>
                            <li>Крепкий тыл</li>
                            <li>Ипотека</li>
                            <li>Квартира и дом</li>
                            <li>Страхование жилых помещений через ЕПД</li>
                        </ul>
                    </li>
                    <li>Здоровье
                        <ul>
                            <li>Спортсменам</li>
                            <li>Несчастный случай</li>
                            <li>Доктор на связи</li>
                            <li>Путешествия</li>
                            <li>Антиклещ</li>
                        </ul>
                    </li>
                    <li>Комплексные
                        <ul>
                            <li>Всё под контролем</li>
                            <li>Всё для бизнеса</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}




