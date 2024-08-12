import { useState } from "react";


function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("SpongeBob");  
   }     
   const increaseAge = () =>{
    setAge(age+1)
   }

   const toggleEmployedStatus = () =>{
    setIsEmployed(!isEmployed);
   }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button> 

            <p>Age: {age}</p>
            <button onClick={increaseAge}>Increase age</button>

            <p>Employment: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Set employment</button>
        </div>
    )
}


export default MyComponent;