import { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import ItemsPerPage from "../components/ItemsPerPage";
import PrevNext from "../components/PrevNext";






const Posts = () => {
  const { data, isLoading, error, makeRequest }   = useRequestData();

  //prev og next buttons "skift side"
  const [ itemsPerPage, setItemsPerPage] = useState(50);
  const [ currentPage, setCurrentPage] = useState(0);


  useEffect(() => {
    //funktion
    makeRequest("https://jsonplaceholder.typicode.com/posts");
  }, []);

  const sliceData = ( dataToSlice) =>{
    //returnerer  data slicet fx (0,20) eller (20,40)
   return dataToSlice.slice( ( currentPage * itemsPerPage ), ( currentPage * itemsPerPage + itemsPerPage ) )
  }

  

  return (
    <div>

      <h1>JSONPLACEholder - Posts</h1>

      { isLoading && <Loader/>}

      { error && <h2>Error ...</h2>}

      <ItemsPerPage setItemsPerPage={ setItemsPerPage } setCurrentPage={setCurrentPage} options={ [5, 10, 50, 200] } />

      {
        data &&
        <PrevNext setCurrentPage={ setCurrentPage } currentPage={currentPage}  dataLength= { data?.length } itemsPerPage = {itemsPerPage}options = { [5, 10, 50, 200] } />
      }

      <div>
          {[5, 10, 20, 100].map(o => (
            <button key={"btn" + o} className="btn" onClick={() => { setItemsPerPage(o); setCurrentPage(0); }}>
              {o} pr.side
            </button>
          ))}
      </div>  
     
     {
      data &&
      <PrevNext setCurrentPage = { setCurrentPage} currentPage={currentPage} dataLength={ data?.length } itemsPerPage= {itemsPerPage }/>
     }


    { data && sliceData ( data ).map (p=> {
          <div key={ p.id }>
          <h2>{p.title}</h2>
          <p>{p.id}</p>
          <Link to = {"/post/" + p.id}>Læs mere</Link>
        </div>
    })

    }


    </div>
  );
};

export default Posts;
