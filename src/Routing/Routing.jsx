import {
  createBrowserRouter
} from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUP/SignUp";
import BrowseListing from "../Components/BrowseListing/BrowseListing";
import PrivateRoute from "./PrivateRoute";
import AddRoommate from "../Components/AddRoommate/AddRoommate";
import Mylistings from "../Components/MyListings/Mylistings";

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
    children:[
        {
            index:true,
            loader:()=>fetch(`http://localhost:3000/roommates`),
            Component:Home
        },
        {
            path:"login",
            
            Component:Login
        },{
            path:"signUp",
            Component:SignUp
        },{
           path:"browse",
           Component:BrowseListing, 
        },{
           path:"add-roommate",
           element:<PrivateRoute><AddRoommate></AddRoommate></PrivateRoute>
        },
        {
           path:"my-listings",
           element:<PrivateRoute><Mylistings></Mylistings></PrivateRoute>
        }
    ]
  },
]);

export default router;