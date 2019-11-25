import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes/AppRouter'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/all'
import './styles/styles.scss'

ReactDOM.render(<AppRouter />, document.getElementById('app'));
