import React from "react";
import {Card} from "react-bootstrap";

const UsersList = ({peoples}) => {
  return(
    <div>
      <h1>People Table</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
    {peoples.map((people, key) => { 
      return(
        <tr key={key}>
          <td>{people.id}</td>
          <td>{people.name}</td>
          <td>{people.email}</td>
          <td>{people.username}</td>
        </tr>
      )
    })}
</table>
    </div>
  )
}

export default UsersList;