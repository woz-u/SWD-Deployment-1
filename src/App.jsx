import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
// import dummyNotes from "./dummy_notes";

import { useState, useEffect } from "react";

const App = () => {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem("notes")) || []
    );

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <main id='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Notes notes={notes} />} />
                    <Route
                        path='/create'
                        element={<Create setNotes={setNotes} />}
                    />
                    <Route
                        path='/edit/:id'
                        element={<Edit notes={notes} setNotes={setNotes} />}
                    />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
