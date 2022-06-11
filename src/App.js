import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { useReducer } from "react";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edit/:id" element={<Edit />} />

                    <Route path="/diary/:id" element={<Diary />} />
                    <Route path="/new" element={<New />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
