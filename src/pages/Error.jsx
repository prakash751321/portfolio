import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError()

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold">Oops! Something went wrong.</h1>
      <p className="mt-4">Error: {error.statusText || error.message}</p>
    </div>
  )
}

export default Error