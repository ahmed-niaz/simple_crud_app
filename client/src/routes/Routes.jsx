import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Users from "../components/Users";
import Update from "../components/Update";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:'/users',
    element: <Users/>,
    loader: ()=> fetch(`http://localhost:3000/users`)
  },
  {
    path:'/update/:id',
    element: <Update/>,
    loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
  }
]);
