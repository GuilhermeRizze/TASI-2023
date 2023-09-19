import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Blog from '../pages/Blog';
  import Principal from '../pages/Principal';
import Calculadora from "../pages/Calculadora";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'



  const router = createBrowserRouter([
    {
      path: "/ola",
      element: <div> <Button
      variant='contained'
      ><Link to = "../">VOLTAR</Link></Button> <br /><br />Hello world!</div>,
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
        path: "/",
        element: <Principal />
    },
    {
        path: "/calculadora",
        element: <Calculadora />
    }
  ]);

  const Rota = () => {
    return (
        <RouterProvider router={router} />
    )
  }

  export default Rota