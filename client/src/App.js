import './App.css';
 import VehicleForm from './VehicleForm';
 import Vehicles from './Vehicles';
 import {useState} from 'react'
  import LoginForm from "./LoginForm"

 function App() {
   const [driver, setDriver] = useState(null)

   function handleLogout() {
     fetch("/logout", {method: "DELETE"}).then(r => {
       setDriver(null)
     })
   }
  
    if(!driver) return <LoginForm setDriver={setDriver}/>

    return (
      <div className="App">
      <header className="App-header">
         <Vehicles/>
         <VehicleForm/>
         <button onClick={handleLogout}>logout</button>
       </header>
      
     </div>
   );
 }

 export default App;

