import { useState, useEffect, useContext } from "react"
import StoreContext from "common/StoreContext"

export default function useFetch(url) {
  let [loading, setLoading] = useState(false)
  let [data, setData] = useState(null)
  let [error, setError] = useState(null)

  const store = useContext(StoreContext)

  useEffect(
    () => {
      setData(null)
      setError(null)
      setLoading(false)

      let cachedData = store.state[url]
      if (cachedData) {
        setData(cachedData)
        store.load(url)
      } else {
        setLoading(true)
        store
          .load(url)
          .then(data => {
            setData(data)
            setLoading(false)
          })
          .catch(setError)
      }
    },
    [url]
  )

  return { loading, data, error }
}
