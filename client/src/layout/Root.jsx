import { Outlet } from "react-router-dom";
import Home from './../pages/Home';


const Root = () => {
    return (
       <main>
        <Home/>
        <Outlet/>
       </main>
    );
};

export default Root;