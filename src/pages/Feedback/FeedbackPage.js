import React from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import '../../css/page.css'
import '../../css/feedback.css'
import { Footer } from "../../components/Footer";
import { Comment } from "../../components/Comment";
export class FeedbackPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            comments:[],
            newComment: ""
        }
        this.getCommentList = this.getCommentList.bind(this)
        this.getCommentList(this)
    }

    getCommentList = (that) => {
        fetch('http://localhost:5288/api/Comments/many') 
        .then(function(response){return response.json();})
        .then(function(jsonStr){that.setState({comments: jsonStr});})
        .catch(error => console.error(error));
    }
    onKeyDown=(event) =>
    {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();
            this.sendComment()
        }
    }
    sendComment = () => {
        if (localStorage.getItem("profileId")!=="")
            if(this.state.newComment!=="")
            {
                try{
                fetch('http://localhost:5288/api/Comments',
                        {
                            method: 'post',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify({
                                Text: this.state.newComment,
                                userId: localStorage.getItem("profileId")
                            })
                        }).then(window.history.go())
                    }
                catch (error) { console.error('Ошибка:', error);}
            }
            else alert("Пустое текстовое поле")
        else alert("Войдите в аккаунт, чтобы оставить комментарий")
    }
    render()
    {
        return(
            <div>
                <Header></Header>
                <div className="main">
                    <Sidebar></Sidebar>
                    <div className ="page">
                        <div className="feedback">
                            <h2>Обратная связь</h2>
                                Здесь вы сможете оставить свои коментарии к сайту для его улучшения<br/>
                                {this.state.comments.map((el) => (
                                    <Comment userName={el.user.name} text={el.text}/>
                                ))}
                            <form className="commentForm">
                                <textarea
                                    aria-multiline="true"
                                    role="textbox"
                                    placeholder="Оставьте свой комментарий"
                                    contentEditable={true}
                                    onChange={(e)=>this.setState({newComment: e.target.value})}
                                    onKeyDown={this.onKeyDown}
                                    ref={node => this.input = node} 
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}