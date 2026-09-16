import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout/MainLayout';
//pages
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import ProductDetail from '@pages/ProductDetail';
import Cart from '@pages/Cart';
import Search from '@pages/Search';
import AboutUs from '@pages/AboutUs';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';
const router =createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
    {
        path:'categories',
        element:<Categories/>
      },
      {
        path:'categories/products/:prefix',
        element:<Products/>,
        loader:  ({params})=>{
          if(typeof params.prefix !== 'string' || !/^[a-z]+$/i.test(params.prefix)){
            throw new Response("Bad Request", {
              status:400, 
              statusText:"Category is Not Found"});
          }
          return true
      }
    },
      {
        path:'categories/products/:prefix/:id',
        element:<ProductDetail/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'search',
        element:<Search/>
      },
      {
        path:'about-us',
        element:<AboutUs/>

    },
      {
        path:'login',
        element:<Login/>
      
    },
      {
        path:'register',
        element:<Register/>
      
    },
]
  }])






function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter