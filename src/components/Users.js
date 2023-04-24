import React from 'react'


const Users = ({id,name,setId}) => {
  return (
    <div>{name}<button onClick={()=>setId(id)}>more info</button></div>
  )
}

export default Users