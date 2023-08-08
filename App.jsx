import React from 'react'
import "./index.css"
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Advotiz from './Components/Advotiz'
//  import Eventclick from './Components/Eventclick'
// import Plays from "./Components/Plays"
// import Sports from "./Components/Sports"
// import Activities from "./Components/Activities"
import Recommended from './Components/Recommended'
import List from './Components/List'
// import Events from './Components/Events'
import Prime from './Components/Prime'
import Near from './Components/Near'
import Streming from './Components/Streming'
import Outdoor from './Components/Outdoor'
import Therapy from './Components/Therapy'
import Popular from './Components/Popular'
import Games from './Components/Games'
import Treading from './Components/Treading'
import Explore from './Components/Explore'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <Header/>
       <Navbar/>
     <Advotiz/>
      {/* <Eventclick/> */}
    
     {/* <Plays/>
     <Sports/>
     <Activities/>   */}
    <Recommended heading={"recomm"} movie={"fbnzxbv"}/>
      <List heading={"recomm"} movie={"fbnzxbv"}/>
      {/* <Events heading={"recomm"} movie={"fbnzxbv"}/> */}
      <Prime />
      <Near />
      <Streming />
      <Outdoor />
      <Therapy />
      <Popular />
      <Games /> 
      <Treading/>
      <Explore/>
      
       <Contact/> 
        
      
    </div>
  )
}

export default App