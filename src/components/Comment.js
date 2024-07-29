import React from 'react'
import '../css/feedback.css';

export class Comment extends React.Component
{
    render()
    {
        return(
            <div className='comment'>
                <h3>{this.props.userName}</h3>
                <text>{this.props.text}</text>
            </div>
        )
    }
}
