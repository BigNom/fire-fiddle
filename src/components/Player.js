import React from 'react'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Player = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>Position:{props.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Player
