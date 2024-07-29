import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import '../../css/login.css'
export class LoginPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            email: "",
            password: "",
        }
        this.inputClick = this.inputClick.bind(this)
        this.writeUserData = this.writeUserData.bind(this)
    }
    writeUserData = (jsonStr) =>
    {
        if((jsonStr.email===this.state.email) && (jsonStr.password===this.state.password))
        {
            localStorage.setItem("loggedIn",true)
            localStorage.setItem("profileId", jsonStr.id)
            localStorage.setItem("profileSurname", jsonStr.surname)
            localStorage.setItem("profileName", jsonStr.name)
            localStorage.setItem("profileFathername", jsonStr.fathername)
            localStorage.setItem("profileEmail", jsonStr.email)
            localStorage.setItem("profileBirthDate", jsonStr.birthDate)
        }
        else
        {
            alert("Неправильный пароль или email")
        }
    }
    inputClick = async(event) =>
    {
        event.preventDefault();
        if((this.state.email !== "")
        &&(this.state.password !== ""))
        {
            fetch('http://localhost:5288/api/User/checkLogin?Email='+this.state.email+'&Password='+this.state.password)
                .then(function(response){return response.json()})
                .then(this.writeUserData)
                .then(function(){
                    if (localStorage.getItem("loggedIn")!=="")
                    {
                        window.history.pushState({}, undefined, "/");
                        window.history.go();
                    }
                    else{
                        window.history.go();
                    }
                }
            )
        }
        else{alert("Не все поля заполнены")}
    }

    render()
    {
        return(
            <div>
                <Header></Header>
                <div className='login'>
                    <form className='login form'>
                        <h1>Личный кабинет</h1>
                        Адрес эл. почты:
                        <br/>
                        <input placeholder='Адрес эл. почты' onChange={(e)=>{ this.setState({email: e.target.value})}}></input>
                        <br/>
                        Пароль
                        <br/>
                        <input type= "password" placeholder='Пароль' onChange={(e)=>this.setState({password: e.target.value})}></input><br/>
                            <button onClick = {this.inputClick}>Войти</button>
                            <a href="/registration">Регистрация</a>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}