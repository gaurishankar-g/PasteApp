import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';

// filepath: c:\Courses\MERN Love Babbar\React JS\Project - PASTE Application\paste-app\src\Redux\pasteSlice.js
let pastesFromStorage = [];
try {
    const stored = localStorage.getItem("pastes");
    if (stored) pastesFromStorage = JSON.parse(stored);
} catch (e) {
    pastesFromStorage = [];
    localStorage.removeItem("pastes");
}

const initialState = {
    pastes: pastesFromStorage,
};

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addToPaste: (state, action) => {
            //Dont create duplicate pastes with same title
            const pasteData = action.payload;
            const existingPaste = state.pastes.find(paste => paste.title === pasteData.title);
            if (existingPaste) {
                toast.error("Paste with this title already exists!");
                return;
            }
            state.pastes.push(pasteData);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste created successfully!");
        },
        updateToPaste: (state, action) => {
            const pasteData = action.payload;
            const index = state.pastes.findIndex(paste => paste._id === pasteData._id);
            if (index >= 0) {
                state.pastes[index] = pasteData;
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste updated successfully!");
            }
        },
        resetToPaste: (state, action) => {
            state.pastes = [];
            localStorage.removeItem("pastes");
            toast.success("All pastes reset successfully!");
        },
        removeFromPaste: (state, action) => {
            const index = state.pastes.findIndex((item) => item._id === action.payload);
            if (index >= 0) {
                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste removed successfully!");
            }
        },

    }
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetToPaste, removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer