import { useState } from "react";
import "../css/App.css"
import "../scss/App.scss"
import logo from "../logo.svg"

export function App(){
    const [name, setName] = useState("")
    return(
        <div className="app">
            <h1>
                Hola desde React
                <img src={logo} width={25} alt="react logo"/>
            </h1>
            <div>
                <label htmlFor="name">
                    Nombre:
                </label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </div>
    )
}