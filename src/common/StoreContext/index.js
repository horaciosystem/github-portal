import React, { createContext, useState } from "react"

const StoreContext = createContext()

function StoreProvider({ children }) {
  let [state, setState] = useState({})

  const load = ({ url, key }) => {
    return fetch(url)
      .then(data => data.json())
      .then(data => {
        setState(prevState => {
          let oldData = prevState[key] || []
          let newData = [...oldData, ...data]
          return { ...prevState, [key]: newData }
        })
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
