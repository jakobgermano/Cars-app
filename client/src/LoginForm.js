 import React, {useState} from 'react'
 import SignUpForm from './SignUpForm'

 function LoginForm({setDriver}){
     const [username, setUsername] = useState("")

     function handleSubmit(e) {
         e.preventDefault()
         fetch("/login", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({username}),
         }).then(r => {
             console.log(r)
             r.json().then(driver => setDriver(driver))
         })
     }
        

     return(
        <div>
            <h4>Login to your account</h4>
        <form onSubmit={handleSubmit}>
            <label> Login </label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
         />
        </form>
        <h4>want to sign up?</h4>
        <SignUpForm setDriver={setDriver}/>
        </div>
     )
 }

 export default LoginForm