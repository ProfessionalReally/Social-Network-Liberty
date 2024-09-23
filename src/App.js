import './App.css';
import './fonts/fonts.css'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className='app-wrapper'>
                    <div>
                        <Routes>
                            <Route element={<Dialogs/>} path="/dialogs/*"/>
                            <Route element={<Profile/>} path="/profile"/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
