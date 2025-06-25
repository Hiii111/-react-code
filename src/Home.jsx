import { useState } from "react";

function Home(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleName=(event) =>{
        setName(event.target.value);
    }
    const handleEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
    }
    const handleClear = () =>{
        setName('');
        setEmail('');
        setPassword('');
    }
    return(
        <div>
            <h1>Controlled Component</h1>
            <form method="post">
                <input type="text" value={name} onChange={handleName} placeholder="Enter Name" />
                <br /><br />
                <input type="email" value={email} onChange={handleEmail} placeholder="Enter Email" />
                <br /><br />
                <input type="password" value={password} onChange={handlePassword} placeholder="Enter Password" />
                <br /><br />
                <button>Submit</button>
                <h4>Name : {name}</h4>
                <h4>Email : {email}</h4>
                <h4>Password : {password}</h4>
            </form>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}
export default Home;