import axios from 'axios'
import React, { Component } from 'react'
import MovieList from '../../components/Movie/MovieList'
import Master from '../../layouts/Master'

export default class Movies extends Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    document.title='Kinolar';
    await axios.get('http://localhost:3002/movies').then((response) => {
      this.setState({
        movies: response.data
      })
    })
  }

  render() {
    return (
      <Master>
        <MovieList movies={this.state.movies} />
      </Master>
    )
  }
}
