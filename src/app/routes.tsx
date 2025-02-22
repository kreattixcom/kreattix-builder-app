import { createBrowserRouter } from 'react-router-dom'

import { LoginPage } from '../pages/login/Loginpage'

export const routes = createBrowserRouter([{ path: '/', element: <LoginPage /> }])
