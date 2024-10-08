import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MyContextProvider } from './context/globalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <BrowserRouter BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextProvider>
)
