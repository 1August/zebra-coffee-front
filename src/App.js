import './App.css'
import {Header} from "./components/Header/Header";
import {MyRoutes} from "./components/MyRoutes/MyRoutes";
import {useDispatch} from "react-redux";
import {setCredentialsAction} from "./redux/authReducer";

function App() {
    const dispatch = useDispatch()

    const localSavedUser = JSON.parse(localStorage.getItem('user')) || {}
    if (Object.values(localSavedUser).length > 0) dispatch(setCredentialsAction(localSavedUser))

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