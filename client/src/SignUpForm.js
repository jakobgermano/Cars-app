import React, {useState} from 'react';


function SignUpForm({setDriver}) {
    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/drivers", {
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
            <form onSubmit={handleSubmit}>
            <label> Sign Up: </label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
         />

        </form>
        </div>
    )
}

export default SignUpForm