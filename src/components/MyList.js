import { useHistory, useParams } from "react-router"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

const IMG_API = 'https://image.tmdb.org/t/p/w300';

const MyList = ({ movieInfo }) => {
  const [data, setData] = useState(null)
  const history = useHistory()
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
    fetch("http://localhost:8000/MyList/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/MyList")
    })
  }

  return (
    <>
      {data == null ? (
        <></>
      ) : (
        <div className="MyList-container">
          {data.map((movieInfo) => (
            <div> 
              <Card style={{ width: '18rem' }} key={movieInfo.id}>
                <Card.Img variant="top" src={IMG_API+movieInfo.poster_path} />
                <Card.Body>
                  <Card.Title>
                  {movieInfo.title}Test{movieInfo.vote_average} 
                  </Card.Title>
                  <Card.Text>
                    test
                  </Card.Text>
                <Button onClick={() => handleDelete(movieInfo.id)}>delete</Button>
                </Card.Body>
              </Card>
            </div>
          ))}


        </div>
      )}
    </>
  )
}

export default MyList
