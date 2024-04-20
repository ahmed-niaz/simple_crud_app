import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users= useLoaderData()
    console.log(users);
    return (
       <main>
       {
        users.map(user => (
            <p key={user.id}>
                {user.name}
                <br />
                {user.email}
            </p>
        ))
       }
       </main>
    );
};

export default Users;