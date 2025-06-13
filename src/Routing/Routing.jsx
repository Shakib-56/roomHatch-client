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
import RommateDetails from "../Components/RommateDetails/RommateDetails";
import UpdateRommateDetails from "../Components/UpdateRommateDetails/UpdateRommateDetails";
import PageError from "../Components/ErrorPage/PageError";
import Loaders from "../Components/Loaders/Loaders";
import BrowseListings from "../Components/BrowseListing/BrowseListing";
import ErrorLayout from "../Components/ErrorPage/ErrorLayout";
import RouteError from "../Components/ErrorPage/RouteError";

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayOut,
    children:[
        {
            index:true,
            loader:()=>fetch(`https://room-hatch-server.vercel.app/roommates`),
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
           loader:()=>fetch(`https://room-hatch-server.vercel.app/roommates`),
          Component:BrowseListings
        },{
           path:"add-roommate",
           element:<PrivateRoute><AddRoommate></AddRoommate></PrivateRoute>
        },
        {
           path:"my-listings",
           loader:()=>fetch(`https://room-hatch-server.vercel.app/roommates`),
           element:<PrivateRoute><Mylistings></Mylistings></PrivateRoute>
        },
        {
          path:"/roommates/:id",
          loader:({params})=>{
            return fetch(`https://room-hatch-server.vercel.app/roommates/${params.id}`)
          },
          element:<RommateDetails></RommateDetails>,
          errorElement:<ErrorLayout><RouteError></RouteError></ErrorLayout>
        },
        {
           path:"/update-roommateDetails/:id",
           loader:({params})=>{
            return fetch(`https://room-hatch-server.vercel.app/roommates/${params.id}`)
          },
           element:<PrivateRoute><UpdateRommateDetails></UpdateRommateDetails></PrivateRoute>
        },
        {
          path:"*",
          element:<ErrorLayout><PageError></PageError></ErrorLayout>
        }
        
    ]
  },
  {
    path:"*",
    element:<PageError></PageError>
  }
]);

export default router;