import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateToPaste, addToPaste } from '../Redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector(state => state.paste.pastes);

    // dateTime formatting
    let options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
    };
    let dateTime = new Intl.DateTimeFormat("en-GB", options).format(new Date());

    function createNewPaste() {
        const pasteData = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: dateTime,
        }
        if (pasteId) {
            dispatch(updateToPaste(pasteData));
        } else {
            dispatch(addToPaste(pasteData));
        }
        setTitle("");
        setValue("");
        setSearchParams({});
    }

    useEffect(() => {
        if (pasteId) {
            const paste = allPastes.find((p) => String(p._id) === String(pasteId));
            if (paste) {
                setTitle(paste.title);
                setValue(paste.content);
            } else {
                setTitle("");
                setValue("");
            }
        } else {
            setTitle("");
            setValue("");
        }
    }, [pasteId, allPastes]);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center py-8 px-2">
            <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-12 flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {pasteId ? "Update Paste" : "Create New Paste"}
                    </h2>
                    {pasteId && (
                        <span className="text-xs text-gray-400 break-all">
                            Editing: {pasteId}
                        </span>
                    )}
                </div>
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    <div className="flex-1 flex flex-col">
                        <label className="mb-2 text-lg font-semibold text-gray-700">
                            Title
                        </label>
                        <input
                            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400 text-base"
                            type="text"
                            placeholder="Enter title here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full md:w-40 mt-4 md:mt-8 p-3 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition text-md font-semibold self-end"
                        onClick={createNewPaste}
                    >
                        {pasteId ? "Update Paste" : "Create New Paste"}
                    </button>
                </div>
                <div>
                    <label className="block mb-2 text-lg font-semibold text-gray-700">
                        Content
                    </label>
                    <textarea
                        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400 font-mono bg-gray-900 text-green-200 text-base"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter your code or text here"
                        rows={16}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Home;