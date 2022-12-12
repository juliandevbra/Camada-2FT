import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './Clase 19/Context'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './Clase 25/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Context>
      <App />
    </Context>
  </ErrorBoundary>
)
