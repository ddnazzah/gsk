import { createHashRouter } from 'react-router-dom'
import Home from '../screens/Home/Home'

const router = createHashRouter([
    {
        path: '/',
        element: <Home />,
    },
])

export default router
