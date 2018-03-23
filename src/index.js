import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Movie from './movie.js'
class App extends PureComponent {

  constructor( props ){
    super( props )

    this.state = {
      movies: [],
      favorites: [],
    }
    this.toFavorite = this.toFavorite.bind(this)

  }

  componentWillMount() {
    // console.log(1)
    axios.get( 'http://localhost:4000/' )
    .then( ( resp ) => {
      // console.log( resp.data )
      this.setState({
        movies: resp.data
      })
    } )
  }

  toFavorite( id ){

    const { favorites } = this.state

    favorites.push( id )

    this.setState({
      favorites: favorites.slice( 0 ),
    })

  }

  componentDidMount() {
    console.log(2)
  }

  componentWillReceiveProps() {
    console.log(0)
  }

  render() {

    const { movies } = this.state

    return (
      <div>
        {
          movies.map( ( movie ) => {
            const { title, image, year, id } = movie
            console.log( id, this.state.favorites )
            const inFavorites = this.state.favorites.indexOf( id ) > -1
            return (
              <Movie inFavorites={ inFavorites } addToFavorite={ this.toFavorite } id={ id } title={ title } image={ image } year={ year } />
            )
          } )
        }
      </div>
    )
  }

}

render( <App name='Kitty'/>, document.querySelector('#app') )
