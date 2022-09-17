import './App.css'
import {Header} from "./components/Header/Header";
import {MyRoutes} from "./components/MyRoutes/MyRoutes";

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