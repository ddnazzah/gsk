import { createBrowserRouter } from 'react-router-dom'
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
])

export default router
