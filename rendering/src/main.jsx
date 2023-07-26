import React from 'react'
import ReactDOM from 'react-dom/client'
import Items from './lists.jsx'
import App from './App.jsx'
import Form from './form.jsx'
import SecondForm from './secondform.jsx'
import bootstrap from "bootstrap/dist/css/bootstrap.css"
// import './index.css'

const divStyled = {
  display: 'flex',
  justifyContent: "space-around",
  position: 'relative',
  top: '3rem'
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Items />
    <div style={divStyled} >
    <SecondForm/>
    <Form/>
    </div>
  
  </React.StrictMode>,
)
