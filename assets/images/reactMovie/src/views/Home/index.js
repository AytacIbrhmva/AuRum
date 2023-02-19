import axios from 'axios'
import React, { Component } from 'react'
import MovieList from '../../components/Movie/MovieList'
import Master from '../../layouts/Master'

export default class index extends Component {

    state = {
        popular_movies: [],
        movies: []
    }
    

    async componentDidMount() {
        document.title='Ana Səhifə';
        await axios.get('http://localhost:3002/movies?_limit=5').then((response) => {
            this.setState({popular_movies: response.data})
        })

        await axios.get('http://localhost:3002/movies?_limit=10').then((response) => {
            this.setState({movies: response.data})
        })
    }

    render() {

        return (
            <Master>
                <MovieList listTitle="Populyar Kinolar" movies={this.state.popular_movies} />
                <MovieList listTitle="Yeni Kinolar" movies={this.state.movies.sort((a,b)=>{return b.id-a.id})} />
            </Master>
        )
    }
}
