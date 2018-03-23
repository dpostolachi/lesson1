import React from 'react'

export default ( props ) => {

  const { title, year, image, addToFavorite, id, inFavorites } = props

  return (
    <table>
      <tr>
        <td>
          <img src={ image } />
        </td>
        <td>
          { `${title}  (${year})` }
          <br />
          { ( !inFavorites ) ? (
            <button onClick={ ( e ) => {
              addToFavorite( id )
            } } type='button'>to favorite</button>

          ) : null }
        </td>
      </tr>
    </table>
  )
}
