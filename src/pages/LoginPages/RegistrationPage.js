import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import '../../css/login.css'
export class RegistrationPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            surname: "",
            name: "",
            fathername: "",
            email: "",
            birthDate: "",
            password: "",
            confirmPassword: ""
        }
        this.inputClick = this.inputClick.bind(this) 
    }
inputClick = async (event) =>
{
    event.preventDefault();

    if((this.state.surname !== "")
    &&(this.state.name !== "")
    &&(this.state.fathername !== "")
    &&(this.state.email !== "")
    &&(this.state.password !== "")
    &&(this.state.birthday !== "")
    &&(this.state.confirmPassword !== ""))
    {
        if(this.state.confirmPassword === this.state.password)
        {
            try
            {
                fetch('http://localhost:5288/api/User',
                {
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        surname:this.state.surname,
                        name:this.state.name,
                        fathername:this.state.fathername,
                        email: this.state.email,
                        birthDate: this.state.birthDate,
                        password: this.state.password,
                    })
                }).then(function(response)
                {
                    if (response.statusText!=="No Content") 
                    {
                        return response.json()
                    }
                    else alert("Этот адрес электронной почты уже занят") 
                })
                .then(function(jsonStr)
                {
                    {
                        localStorage.setItem("loggedIn",true)
                        localStorage.setItem("profileId", jsonStr.id)
                        localStorage.setItem("profileSurname", jsonStr.surname)
                        localStorage.setItem("profileName", jsonStr.name)
                        localStorage.setItem("profileFathername", jsonStr.fathername)
                        localStorage.setItem("profileEmail", jsonStr.email)
                        localStorage.setItem("profileBirthDate", jsonStr.birthDate)
                    }
                    
                })
                .then(function()
                {
                    window.history.pushState({}, undefined, "/");
                    window.history.go();
                })
            }
            catch (error) { console.error('Ошибка:', error);}
        }
        else{alert("Пароли не совпадают")}   
    }  else{alert("Не все поля заполнены")}
}
    render()
    {
        return(
            <div>
                <Header></Header>
                <div className='login'>
                    <form>
                        <h1>Регистрация</h1>
                        Фамилия:
                        <br/>
                        <input placeholder='Фамилия' 
                        onChange={(e)=>this.setState({surname:e.target.value})}></input>
                        <br/>
                        Имя:
                        <br/>
                        <input placeholder='Имя' 
                        onChange={(e)=>this.setState({name:e.target.value})}></input>
                        <br/>
                        Отчество:
                        <br/>
                        <input placeholder='Отчество' 
                        onChange={(e)=>this.setState({fathername:e.target.value})}></input>
                        <br/>
                        Дата рождения:
                        <br/>
                        <input type = 'date' 
                        onChange={(e)=>this.setState({birthDate:e.target.value})}></input>
                        <br/>
                        Адрес эл. почты:
                        <br/>
                        <input placeholder='Адрес эл. почты' 
                        onChange={(e)=>this.setState({email:e.target.value})}></input>
                        <br/>
                        Пароль:
                        <br/>
                        <input type= "password" placeholder='Пароль' 
                        onChange={(e)=>this.setState({password:e.target.value})}></input>
                        <br/>
                        Повторите пароль:
                        <br/>
                        <input type= "password" placeholder='Повторите пароль' 
                        onChange={(e)=>this.setState({confirmPassword:e.target.value})}></input>
                        <br/>
                            <button className='registration_button' onClick={this.inputClick}>Зарегистрироваться</button> 
                    </form>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}