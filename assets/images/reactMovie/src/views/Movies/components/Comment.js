import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className="comment border border-1 p-4">
                <div className="author">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JyScJ3XAm0g9mNMQ1Ws7EI6LoVgs7_HDXg&usqp=CAU" alt="" />
                    <div className="author-meta">
                        <h5>{this.props.author}</h5>
                        <span>{this.props.date}</span>
                    </div>
                </div>
                <p className='commentContent'>{this.props.comment}</p>
            </div>
        )
    }
}
