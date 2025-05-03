import React from 'react'
import Card from './components/Card'
import { Route, Router, Routes } from 'react-router-dom'
import Details from './components/Details'

const App = () => {
  return (
    <div>
      <Routes>
    <Route path='/' element={<Card/>}/>
    <Route path='/character/:id' element={<Details/>}/>
      </Routes>
      {/* <Card/> */}
    </div>
  )
}

export default App
