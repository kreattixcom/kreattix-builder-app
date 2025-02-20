import { createBrowserRouter } from 'react-router-dom'

import CounterPage from '../pages/counter/CounterPage'

export const routes = createBrowserRouter([{ path: '/', element: <CounterPage /> }])
