import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import HomePage from "./pages/HomePage/HomePage"
import ProjectPage from "./pages/ProjectsPage/ProjectPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectPage /> },
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App