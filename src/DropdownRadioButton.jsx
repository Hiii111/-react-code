import { useState } from "react";

function DropdownRadioButton(){
    const[gender, setGender] = useState("male");
    const handleGender = (event) =>{
        setGender(event.target.value);
    }
    const[country, setCountry] = useState("Please Select Country");
    const handleCountry = (event) =>{
        setCountry(event.target.value);
    }
    return(
        <div>
           <h1>Handle Radio Button</h1>
           <p>select your gender</p>
           <input type="radio" onChange={handleGender} name="gender" checked={gender=="male"} id="male" value="male" />
           <label htmlFor="male">Male</label>
           <input type="radio" onChange={handleGender} name="gender" checked={gender=="female"} id="female" value="female" />
           <label htmlFor="female">Female</label>
           <h3>{gender}</h3>
            
           <h1>Handle Dropdown</h1>
            <select onChange={handleCountry}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
                <option value="England">England</option>
                <option value="Bangladesh">Bangladesh</option>
            </select>
            <h3>Select Country : {country}</h3>
        </div>
    )
}
export default DropdownRadioButton;