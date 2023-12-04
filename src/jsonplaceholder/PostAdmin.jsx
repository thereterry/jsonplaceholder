import {useEffect } from "react";

import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";







const PostAdmin = () => {

  // Hent data der skal map 'es

  const { data, isLoading, error, makeRequest }   = useRequestData();

  // Når DELETE kaldes-og data er tom hvis delete lykkedes
  const { data: dataDelete, isLoading:isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete }   = useRequestData();


  useEffect(() => {
    //funktion
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);

  const handleDelete = ( postID ) => {


    makeRequestDelete ( "https://jsonplaceholder.typicode.com/posts/" + postID, "DELETE" )
  }


  

  return (

    <div>

      <h1>JSONPLACEholder - PostAdmin</h1>

      { isLoading && <Loader/>}

      { error && <h2>Error ...</h2>}


     <table>
    <thead>
        <tr>
            <td></td>
            <td></td>
            <td></td> 
            {<td> <Link to={"/postcreate" } className="btn"></Link></td> }
         </tr>
    </thead>
    </table> 
 <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
            <td>RET</td>
            <td>SLET</td>
          </tr>
        </thead>
        <tbody>
          {data && data.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>
                <Link to={"/post/" + p.id} className="btn">
                  <FaEdit />
                </Link>
              </td>
              <td><button><FaTrash  onClick = { () => handleDelete (p.id )}/></button></td> 
              <td>
                <button>Slet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostAdmin;
  


      


