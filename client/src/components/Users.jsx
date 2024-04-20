import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users= useLoaderData()
   const deleteUser = (_id)=>{
    console.log(`delete user`,_id);
    fetch(`http://localhost:3000/users/${_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            alert(`Delete successfully`)
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
                <button onClick={()=> deleteUser(user._id)}>delete</button>
            </p>
        ))
       }
       </main>
    );
};

export default Users;