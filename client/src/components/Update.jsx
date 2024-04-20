import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loaderUser = useLoaderData();
  const updateUser = (e) => {
    // client side
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updateUser = { name, email };
    
    // server side
    fetch(`http://localhost:3000/users/${loaderUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
            alert(`User Update Successfully`)
        }
      });
  };
  return (
    <main>
      <form onSubmit={updateUser}>
        <input type="text" name="name" defaultValue={loaderUser?.name} id="" />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderUser?.email}
          id=""
        />
        <br />
        <input type="submit" value="update" />
      </form>
    </main>
  );
};

export default Update;
