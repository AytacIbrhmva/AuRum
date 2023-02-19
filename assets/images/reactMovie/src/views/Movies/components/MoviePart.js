import React, { Component } from 'react'

export default class MoviePart extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="moviePart">
                    <div className="partCover" style={{ backgroundImage: `url(${this.props.src})` }}></div>
                    <div className="moviePartContent">
                        <h5>{this.props.title}</h5>
                        <span>{this.props.publishedAt}</span>
                    </div>
                </div>
            </div>
        )
    }
}
