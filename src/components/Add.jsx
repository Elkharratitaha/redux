
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TestContext } from "./TestContext";

 export default function Add (){
    
    const navigate = useNavigate();
    const { test, setTest, user, setUser } = useContext(TestContext);
    const [inp,setInp] = useState("");


    const handleSetValeur = (e) => {
        e.preventDefault();
        setTest({"valeur":test.valeur+1,"string":test.string });
    }


    const handleSetString = (e) => {
        e.preventDefault();
        setTest({"valeur":test.valeur,"string":inp });
    }
    return (
        <div>
            <h3>Home</h3>
            <input  type="text"
                    value={inp}
                    onChange={(e)=>setInp(e.target.value)}
             />
             <button onClick={handleSetString} >String</button>
             <br />
             <br />
            <button onClick={handleSetValeur}>incrementer</button>
            <p>{test.valeur}</p>
            <p>{test.string}</p>
            <Link to={"/"} >Home</Link>
        </div>
    )
}