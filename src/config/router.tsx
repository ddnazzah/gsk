import { createHashRouter } from 'react-router-dom'
import About from 'screens/About/About'
import Home from '../screens/Home/Home'

const router = createHashRouter([
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
