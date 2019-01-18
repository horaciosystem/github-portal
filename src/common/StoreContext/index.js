import React, { createContext, useState } from "react"

const StoreContext = createContext()

function StoreProvider({ children }) {
  let [state, setState] = useState({})

  const load = url => {
    return fetch(url)
      .then(data => data.json())
      .then(data => {
        setState({ ...state, [url]: data })
        return data
      })
  }

  return (
    <StoreContext.Provider value={{ state, load }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreProvider }
export default StoreContext
