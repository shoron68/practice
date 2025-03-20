
import Download from "./components/Download"
import Events from "./components/Events"
import Faq from "./components/Faq"
import Home from "./components/Home"
import NavTab from "./components/NavTab"
import Slider from "./components/Slider"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"




function App() {
  let router = createBrowserRouter(createRoutesFromElements(

    < Route>
      <Route index element={<Home/>}></Route>
      <Route path="/faq" element={<Faq/>}></Route>
      <Route path="/events" element={<Events/>}></Route>
      <Route path="/download" element={<Download/>}></Route>
      <Route path="/navtab" element={<NavTab/>}></Route>
      <Route path="/slider" element={<Slider/>}></Route>
    </Route>
  
    ))


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
