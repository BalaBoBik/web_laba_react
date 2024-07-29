import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import '../../css/account.css'

export class AccountPage extends React.Component
{
    render()
    {
        return(
            <div>
                <Header></Header>
                <div className="account">
                        <form>
                        <div className='headline'>ФИО:</div>
                        <label>{localStorage.getItem('profileSurname')} {localStorage.getItem('profileName')} {localStorage.getItem('profileFathername')}</label><br/>
                        <div className="headline">Дата Рождения: </div>
                        <label>{localStorage.getItem('profileBirthDate')}</label><br/>
                        <div className="headline">Электронная Почта: </div>
                        <label>{localStorage.getItem('profileEmail')}</label><br/>

                        <button onClick={()=>{  localStorage.setItem('loggedIn', "")
                            localStorage.setItem('profileSurname', "")
                            localStorage.setItem('profileName', "")
                            localStorage.setItem('profileFathername', "")
                            localStorage.setItem('profileBirthDate', "")
                            localStorage.setItem('profileEmail', "")
                            localStorage.setItem('profileId', "")
                            localStorage.setItem("products", JSON.stringify([]));
                            localStorage.setItem("productsLen",0)

                            window.history.pushState({}, undefined, "/");
                            window.history.go()}}>Выйти из аккаунта
                        </button>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}