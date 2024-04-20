import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Users from "../components/Users";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:'/users',
    element: <Users/>,
    loader: ()=> fetch(`http://localhost:3000/users`)
  }
]);
