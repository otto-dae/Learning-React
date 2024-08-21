import { createContext, useState } from "react"
import ComponentB from "./ComponentB.jsx"

export const userName = createContext();
function ComponentA(){

    const user = useState("koto");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>Hello {user}</h2>

            <userName.Provider value={user}>

            <ComponentB/>

            </userName.Provider>


        </div>
    ) 
}
export default ComponentA