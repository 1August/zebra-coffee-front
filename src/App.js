import './App.css'
import {Header} from "./components/Header/Header";
import {MyRoutes} from "./components/MyRoutes/MyRoutes";
import {useEffect} from "react";
import {Navigation} from "react-router";

function App() {


    return (
        <div className="App">
            <Header/>
            <main>
                <MyRoutes/>
            </main>
        </div>
    )
}

export default App