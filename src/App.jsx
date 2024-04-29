import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Member from "./page/Member";
import Login from "./page/Login";

function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Member />,
      },
      {
        path: "/login",
        element: <Login />,
      }
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
