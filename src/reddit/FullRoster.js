import React from 'react'
import PlayerAPI from '../components/api'
import { Link } from 'react-router-dom'

// The FullRoster iterates over all of the players and creates
// a link to their profile page.
const FullRoster = (props) => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default FullRoster