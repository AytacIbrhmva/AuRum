import React, { Component } from 'react'
import Movie from './MovieSingle';
export default class MovieList extends Component {
    render() {
        return (
            <div className="section mt-4">
                <h2 className='section-title mx-2'>{this.props.listTitle}</h2>
                <div className="section-body">
                    <div className="movieList">
                        {
                            this.props.movies.length > 0 ?
                                this.props.movies.map(movie => {
                                    return (
                                        <Movie
                                            id={movie.id}
                                            key={movie.id}
                                            movieTitle={movie.title}
                                            movieRating={2}
                                            movieLike={3}
                                            movieComments={3}
                                            movieSrc={movie.src}
                                        />
                                    )
                                })
                                : <h1>Məlumat Tapılmadı</h1>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
