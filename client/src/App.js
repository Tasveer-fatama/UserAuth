import React from 'react'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
<Routes>
    <Route path='/'  element={<Login/>}/>
    <Route path='/signup'  element={<Signup/>}/>
</Routes>


    </Router>
     

   
  )
}

export default App
