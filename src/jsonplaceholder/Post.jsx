import { useEffect, useState } from 'react'

import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import { useParams, Link } from 'react-router-dom'
import Posts from './Posts'



 
const Post = () => {

  const { data, isLoading, error, makeRequest }   = useRequestData();

  const { postID } = useParams()
 
    useEffect(() => {
     
        makeRequest("https://jsonplaceholder.typicode.com/posts/" + postID)
     //postID // 3
    }, [])
   
  return (
    <div>

      {isLoading && <Loader />}
      {error && <h2>Error... </h2>}
      <h1>JSON Placeholder - POST</h1>
      <h2>{postID}</h2>



      {data &&

        <div className='card' key = {data.id}>
           <h2 className=''>{data.title}</h2>
          <p>{data.id}</p> 
          <p>{data.body}</p>
        </div>

      }
     
    </div>
    // <Link to="/posts" className="btn"> &lt;&lt; Tilbage til alle Posts &reg; &copy;</Link>


  )
}
export default Post