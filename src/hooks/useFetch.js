import { useState, useEffect } from "react";

const useFetch = (url, options) => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);


  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const data = await fetch(url, options)
        const json = await data.json()
        setResponse(json)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])


  return {
    response,
    error,
    isLoading
  }

}

export default useFetch