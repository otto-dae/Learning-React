import { useContext } from "react"
import { userName } from "./ComponentA.jsx"
function ComponentD(){
    const CompDUser = useContext(userName);
    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>Bye {CompDUser}</h2>
        </div>
    ) 
}
export default ComponentD