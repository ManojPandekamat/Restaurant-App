<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <div>Hello world</div> */}
  </StrictMode>,
=======
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
<AppRouter/>
  // </StrictMode>,
>>>>>>> 1c60ae9 (done)
)
