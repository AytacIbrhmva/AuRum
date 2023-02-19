import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export default class MovieSingle extends Component {
    render() {
        return (
            <div className="movieSingle">
                <div className="movieCover">
                    <img src={this.props.movieSrc} alt="" />
                </div>
                <div className="movieInfo">
                    <div className="mcard-head">
                        <h4 className='movie-title'>{this.props.movieTitle.toUpperCase()}</h4>
                        <h5 className='movie-rating'>{this.props.movieRating}/10</h5>
                    </div>
                    <div className="mcard-footer">
                        <div className="mcard-end">

                            <div className="quickActions">
                                <Link to={`/movies/${this.props.id}`} className='btn btnPrimary movieDetail'>Ətraflı</Link>
                            </div>
                            <div className="mcard-statistic">
                                <h5 className='movie-comment'><i className="fa-light fa-heart me-1"></i> {this.props.movieLike}</h5>
                                <h5 className='movie-rating'><i className="fa-light fa-star me-1"></i> {this.props.movieComments}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
