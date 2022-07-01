import React, { useState } from "react"
import UsersList from "../../components/usersList/UsersList";


const MainPage = () => {
  const [peoples, setPeoples] = useState([]);
  const getPeoples = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data => setPeoples(data))
  }
  return (
    <div>
      <h1>MainPage</h1>
      <button onClick={getPeoples}>get peoples</button>
      <UsersList peoples={peoples}/>
    </div>
  )
}

export default MainPage;