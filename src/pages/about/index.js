import * as React from 'react'
import { Link } from 'gatsby'

export default function AboutPage () {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link 
        to='/'
      >
        Go to the home page
      </Link>
    </main>
  )
}

