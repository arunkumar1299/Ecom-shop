import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';

function App() {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Route>
))
  return (
    <>
    <RouterProvider router={router}>

    </RouterProvider>
    </>
  )
}

export default App
