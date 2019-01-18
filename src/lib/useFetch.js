import { useState, useEffect, useContext } from "react"
import StoreContext from "common/StoreContext"

export default function useFetch({ url, key, stateUpdater }) {
  let [loading, setLoading] = useState(false)
  let [data, setData] = useState(null)
  let [error, setError] = useState(null)

  const store = useContext(StoreContext)

  useEffect(
    () => {
      setError(null)
      setLoading(true)
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
