
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import PortfolioPage from './components/pages/PortfolioPage.jsx'
import Resume from './components/pages/Resume.jsx'

const router = createBrowserRouter([
  { path: '/', 
  element: <App />, 
  children: [
    { index: true, element: <About /> },
     { path: 'contact', element: <Contact /> }, 
     { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'resume', element: <Resume /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)


