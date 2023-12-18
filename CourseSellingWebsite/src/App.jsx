import { useState } from 'react'

import './App.css'
import Appbar from './Appbar'
import Signin from './Signin'
import Signup from './Signup'
import AddCourse from './AddCourse'
import Courses from './Courses'
import Course from './Course'
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom'

function App() {

  return (
    <>
<div style={{backgroundColor:'#dcdcdc', width:'100%' , height:'100vh' }}>

  <Router>
    <Appbar/>
    <Routes>
      <Route path={'/AddCourse'} element={<AddCourse/>}></Route>
      <Route path={'/Signin'} element={<Signin/>}></Route>
      <Route path={'/Signup'} element={<Signup/>}></Route>
      <Route path={'/Courses'} element={<Courses/>}></Route>
      <Route path={'/Course/:courseId'} element={<Course/>}/>
   </Routes>
   </Router>
   </div>

    </>
  )
}

export default App
