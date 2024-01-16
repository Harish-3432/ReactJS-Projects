import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
//     const [data,setData] = useState([]);


//    useEffect(()=>{
//     fetch(`https://api.github.com/users/Harish-3432`)
//     .then(res => res.json())
//     .then((data)=>{
//         setData(data);
//     })
//    },[])

  return (
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github : {data.login}
    <br/>Public Repositories : {data.public_repos}
    <br/>Followers : {data.followers}
      <br/>Following : {data.following}
    {/* <img src={data.avatar_url} alt="Git picture" width={300} />  */}
    </div>
  )
}

export default Github;

export const githubInfo = async () => {
    const response = await fetch(`https://api.github.com/users/Harish-3432`)
    return response.json();
}
