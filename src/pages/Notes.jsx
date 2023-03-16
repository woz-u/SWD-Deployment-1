import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";

import NoteItem from "../components/NoteItem";

const Notes = ({ notes }) => {
    const [showSearch, setShowSearch] = useState(false);
    const [text, setText] = useState("");
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = () => {
        setFilteredNotes(
            notes.filter((note) => {
                if (note.title.toLowerCase().match(text.toLowerCase())) {
                    return notes;
                }
            })
        );
    };

    useEffect(handleSearch, [text]);

    return (
        <section>
            <header className='notes__header'>
                {!showSearch && <h2>Notes</h2>}
                {showSearch && (
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                            handleSearch();
                        }}
                        autoFocus
                        placeholder='Keyword...'
                    />
                )}
                <button
                    className='btn'
                    onClick={() => setShowSearch((prevState) => !prevState)}>
                    {showSearch ? <MdClose /> : <CiSearch />}
                </button>
            </header>
            <div className='notes__container'>
                {filteredNotes.length == 0 && (
                    <p className='empty__notes'>No Notes Found</p>
                )}
                {filteredNotes.map((note) => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
            <Link to='/create' className='btn add__btn'>
                <BsPlusLg />
            </Link>
        </section>
    );
};

export default Notes;
