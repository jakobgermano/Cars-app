import React, {useState} from 'react';


function SignUpForm({setDriver}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
   

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })
        .then(r => {
            r.json().then(driver => setDriver(driver))
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label> Username and Password </label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
         />
         <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
        
         <button type="submit">Submit</button>
        

        </form>
        </div>
    )
}

export default SignUpForm;