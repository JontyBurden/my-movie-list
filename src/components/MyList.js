import { useParams } from "react-router"
import { useEffect, useState } from "react"

const MyList = ({ movieInfo }) => {
  const [data, setData] = useState(null)

  console.log(movieInfo)
  useEffect(() => {
    console.log("hit")
    fetch("http://localhost:8000/MyList")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])

  const handleDelete = (id) => {
    console.log(id)
    fetch("http://localhost:8000/MyList", {
      method: "DELETE",
    }).then(console.log("id", id))
  }

  return (
    <>
      {data == null ? (
        <></>
      ) : (
        <div className="my-list">
          {data.map((movieInfo) => (
            <div key={movieInfo.id}>
              <h2>{movieInfo.id}</h2>
              <button onClick={() => handleDelete(movieInfo.id)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default MyList
