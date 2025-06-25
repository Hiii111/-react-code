import { useState } from "react";

function Checkboxes(){
    const[skills, setSkills] = useState([]);
    const handleSkills = (event) =>{
        if (event.target.checked) {
            setSkills([...skills, event.target.value]);
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)]);
        }
    }
    return(
        <div>
        <br /><br />
            <input type="checkbox" onChange={handleSkills} id="php" value="PHP" />
            <label htmlFor="php">PHP</label>
            <br /><br />
            <input type="checkbox" onChange={handleSkills} id="laravel" value="Laravel" />
            <label htmlFor="laravel">Laravel</label>
            <br /><br />
            <input type="checkbox" onChange={handleSkills} id="java-script" value="java-script" />
            <label htmlFor="java-script">Java Script</label>
            <br /><br />
            <input type="checkbox" onChange={handleSkills} id="mysql" value="mysql" />
            <label htmlFor="mysql">MySql</label>

            <h1>{skills.toString()}</h1>

        </div>
    )
}

export default Checkboxes;