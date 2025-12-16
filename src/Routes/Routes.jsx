import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import HomePage from "../Component/Banner/HomePage";
import Error from "../Pages/Error/Error";
import Apps from "../Pages/Error/Apps/Apps";
import Install from "../Pages/InstallPage/Install";
import AppDetails from "../Pages/AppDetails/AppDetails";

 const route=createBrowserRouter([
   {
    path:'/',
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            loader:()=>fetch('../data.json'),
            Component:HomePage
        },
        {
            path:'/apps',
           Component:Apps
        },
        {
            path:'/appdetaila/:id',
            Component:AppDetails
        },
        {
            path:'/install',
            Component:Install
        }
    ]
   },
   {
    path:'*',
    Component:Error
   }
 ])

 export default route