import React from 'react';
import { Link, Match } from 'react-router-dom'

const Contact = (props) => {
  const contact = (props.match.params.id)
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>Phone:{props.phone}</h2>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

export default Contact;