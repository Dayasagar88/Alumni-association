import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Jobs from "./components/pages/Jobs";
import Donations from "./components/pages/Donations";
import Events from "./components/pages/Events";
import Profile from "./components/pages/Profile";
import Alumni from "./components/pages/Alumni";
import MainLayout from "./components/MainLayout";
import LandingPage from "./components/landingPages/LandingPage";
import HomePage from "./components/landingPages/HomePage";
import About from "./components/landingPages/About";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Contact from "./components/landingPages/Contact";



const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children : [
      {
        path : "/",
        element: <LandingPage/>,
        children: [
          {
            path : "/",
            element : <HomePage/>
          },
          {
            path : "/about",
            element : <About/>
          },
          {
            path : "/contact",
            element : <Contact/>
          },
          {
            path : "/login",
            element : <Login/>
          },
          {
            path : "/signup",
            element : <Signup/>
          }
        ]
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/alumni",
        element: <Alumni />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
]);

function App() {


  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
