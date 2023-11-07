import { createBrowserRouter } from 'react-router-dom'
import About from 'screens/About/About'
import Home from '../screens/Home/Home'
import Jigsaw from 'screens/Jigsaw/jigsaw'

const router = createBrowserRouter([
    {
        path: '/jigsaw',
        element: <Jigsaw />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/why-me',
        element: <About />,
    },
])

export default router
