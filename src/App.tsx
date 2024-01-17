
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "users",
      element:<Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);
      <RouterProvider router={router} />
}
export default App;
