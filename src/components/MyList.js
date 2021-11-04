import { useParams } from "react-router";
import { useEffect, useState } from "react";

const MyList = ( { movieInfo }) => {
    
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        fetch('http://localhost:8000/MyList/' + id)
          .then(res => {
            return res.json()
          })
          .then(data => {
            setData(data)
          })
      },[])

    const handleDelete = () => {
        fetch('http://localhost:8000/MyList/', {
            method: "DELETE"
        }).then(console.log('id',data.id))
    }

    return (
        <div className="my-list">
            {movieInfo.map((movieInfo) => (
                <div key={movieInfo.id}>
                    <h2>{ movieInfo.id }</h2>
                    <button onClick={handleDelete}>delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default MyList;