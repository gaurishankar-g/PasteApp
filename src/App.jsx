import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Pastes from './Components/Pastes'
import ViewPaste from './Components/ViewPaste'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <NavBar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element: <div>
        <NavBar />
        <Pastes />
      </div>
    },
    {
      path: "pastes/:id",
      element: <div>
        <NavBar />
        <ViewPaste />
      </div>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
