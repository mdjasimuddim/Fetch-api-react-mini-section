import React, {useState, useEffect} from 'react'

const DataFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>{
        if(!res.ok){
          throw Error('Error is found in the api')
        }else{
          return res.json();
        }
      })
      .then((data) =>{
        setData(data);
        setError(null);
        setLoading(false)
      }).catch((error) =>{
        setError(error.message);
      })
    },2000)
  },[])
  const loadingMessage = 'User information is loading ...';
  return (
    <div className='main'>
    <h1>Users Management App</h1>
    <div className='users'>
      {/* <DataFetch /> */}
      {loading && loadingMessage}
      {error && error}
      {
        data && data.map((data)=>{
          return <div className='user'>
            <h5>{data.id}</h5>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
            <a>{data.phone}</a>
          </div>
        })
      }
    </div>
  </div>
  )
}

export default DataFetch