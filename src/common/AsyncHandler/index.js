import React from "react"

function AsyncHandler({ fetcher, children }) {
  if (fetcher.error) {
    return <div>Error: {fetcher.error}</div>
  }

  if (fetcher.loading) {
    return <div>Loading...</div>
  }

  if (!fetcher.data) {
    return null
  }

  return children(fetcher)
}

export default AsyncHandler
