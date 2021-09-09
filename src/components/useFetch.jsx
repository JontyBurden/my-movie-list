import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
    
            setMovies(data.results)
        })
      }, [url])

    return { movies } 
}

export default useFetch;