import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home'
import Jobs from './components/pages/Jobs';
import Donations from './components/pages/Donations';
import Events from './components/pages/Events';
import Profile from './components/pages/Profile';
import Alumni from './components/pages/Alumni';

function App() {

  const browserRouter = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path: "/alumni",
      element : <Alumni/>
    },
    {
      path: "/jobs",
      element : <Jobs/>
    },
    {
      path: "/donation",
      element : <Donations/>
    },
    {
      path: "/events",
      element : <Events/>
    },
    {
      path : "/profile",
      element: <Profile/>
    }

  ]);
                

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App
