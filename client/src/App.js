import './App.css';
import React, {Fragment} from 'react';
import VehicleForm from './VehicleForm';
import Vehicles from './Vehicles';
import {useEffect, useState} from 'react'
import LoginForm from "./LoginForm"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./About";
import Brand from "./Brand";
  

 function App() {
   const [driver, setDriver] = useState(null)


   useEffect(() => {
     fetch('/me').then((r) => {
       if (r.ok) {
         r.json().then((driver) => setDriver(driver));
       }
     })
   }, []);
   

   



   function handleLogout() {
     fetch("/logout", 
     {method: "DELETE"}).then(r => {
       setDriver(null)
     })
   }
  
    if(!driver) return <LoginForm setDriver={setDriver}/>

    return (
      <div className="App">
        <Router>
        <Fragment>
        <Routes>
          <Route path="/" element={<Vehicles driver={driver}/>}>
         </Route>
         <Route path="/new"  element={<VehicleForm/>} >
         </Route>
         <Route exact path="/about" element={<About/>}>
         </Route>
         <Route exact path="/brand" element={<Brand/>}>
         </Route>
         </Routes>
         <button onClick={handleLogout}>logout</button>
         </Fragment>
         </Router>
         
     </div>
   );
 }

 export default App;

