import { useState, useEffect, useContext } from "react"
import StoreContext from "common/StoreContext"

export default function useFetch({ url, key, stateUpdater }) {
  const store = useContext(StoreContext)

  let [loading, setLoading] = useState(true)
  let [data, setData] = useState(store.state[key])
  let [error, setError] = useState(null)

  useEffect(
    () => {
      setLoading(true)
      setError(null)
      store.load({ url, stateUpdater }).catch(setError)
    },
    [url, key]
  )

  useEffect(
    () => {
      setData(store.state[key] || null)
      setLoading(false)
    },
    [store.state[key]]
  )

  return { loading, data, error }
}
