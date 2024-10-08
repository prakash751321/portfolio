import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects.jsx'
import Error from './pages/Error.jsx'
import NotFound from './pages/NotFound.jsx'
import Skills from './pages/Skills.jsx'

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <Home />,
//           errorElement: <Error />
//         },
//         {
//           path: "about",
//           element: <About />,
//           errorElement: <Error />
//         },
//         {
//           path: "project",
//           element: <Projects />,
//           errorElement: <Error />
//         },
//         {
//           path: "skills",
//           element: <Skills />,
//           errorElement: <Error />
//         },
//         {
//           path: "contact",
//           element: <Contact />,
//           errorElement: <Error />
//         },
//         // {
//         //   path: "#",
//         //   element: <NotFound />,
//         //   errorElement: <Error />
//         // }
//       ]
//     },
//   ])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
