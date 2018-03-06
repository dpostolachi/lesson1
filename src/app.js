import React, { PureComponent } from 'react'
import MovieList from '../movies.js'

export default class App extends PureComponent {

    constructor ( props ) {
        super( props )
        this.state = {
            list: MovieList.map( (movie) => movie.title ),
        }
    }

    addToList(){
        const list = this.state.list.slice()
        list.push( this.input.value )
        console.log( '>>>', list )
        this.setState({
            list: list,
        })
    }

    render () {

        const { title } = this.props
        const { list } = this.state

        return (
            <div>
                <h1>{ title }</h1>
                <ul>
                    {
                        list.map( ( item, key ) => {
                            return <li key={ key }>{ item }</li>
                        } )
                    }
                </ul>
                <input type='text' ref={ ( input ) => { this.input = input } } />
                <button type='submit' onClick={
                    ( e ) => {
                        this.addToList()
                    }
                }>Save</button>
            </div>
        )
    }

}
