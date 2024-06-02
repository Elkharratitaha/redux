
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TestContext } from "./TestContext";

 export default function Home (){

    const navigate = useNavigate();
    const { test, setTest, user, setUser } = useContext(TestContext);

    const [inp,setInp] = useState("");
    const [nom,setNom] = useState("");
    const [age,setAge] = useState(0);


    const handleSetValeur = (e) => {
        e.preventDefault();
        setTest({"valeur":test.valeur+1,"string":test.string });
    }


    const handleSetString = (e) => {
        e.preventDefault();
        setTest({"valeur":test.valeur,"string":inp });
    }


    const handleSetNom = (e) => {
        e.preventDefault();
        setUser({...user,nom:nom});
    }


    const handleSetAge = (e) => {
        e.preventDefault();
        setAge(age+1);
        setUser({...user , age:age});
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

            <br />
            <p>____________________________________</p>
            <br />

            <input  type="text"
                    value={nom}
                    onChange={(e)=>setNom(e.target.value)}
             />

             <button onClick={handleSetNom} >Nom</button>

             <br />
             <br />
            <button onClick={handleSetAge}>Age</button>

            <p>{user.nom}</p>
            <p>{user.age}</p>

            <Link to={"/add"} >Add</Link>
            <br />
            <Link to={"/posts"} >Posts</Link>
        </div>
    )
}