import React from 'react'
import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <div>
        <h2>404 Not Found</h2>
        <Link to="/"> Return to Home </Link>
    </div>
  )
}
