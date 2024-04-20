import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers= useLoaderData();
    const [users,setUsers]= useState(loadedUsers)
   const deleteUser = (_id)=>{
    console.log(`delete user`,_id);
    fetch(`http://localhost:3000/users/${_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            alert(`Delete successfully`);
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining)
        }
    })
   }
    return (
       <main>
       {
        users.map(user => (
            <p key={user._id}>
                {user._id}.
                {user.name}
                <br />
                {user.email}
                <br />
                <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                </Link>
                <button onClick={()=> deleteUser(user._id)}>delete</button>
            </p>
        ))
       }
       </main>
    );
};

export default Users;