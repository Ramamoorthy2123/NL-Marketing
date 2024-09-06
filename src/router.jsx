import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminLogIn from "./Components/LogInCredential/Admin/AdminLogIn";
import UserLogIn from "./Components/LogInCredential/User/UserLogIn";
import AdminSignUp from "./Components/SignUpCredential/Admin/AdminSignUp";
import UserSignUp from "./Components/SignUpCredential/User/UserSignUp"
import Admin from "./Components/Admin/Admin";

export const router = createBrowserRouter([
    {path : '/',element:<App/>},
    {path :'/adminlogin',element:<AdminLogIn/>},
    {path :'/userlogin',element:<UserLogIn/>},
    {path :'/adminsignup',element:<AdminSignUp/>},
    {path :'/usersignup',element:<UserSignUp/>},
    {path :'/admin',element:<Admin/>},
]);