import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const write = createSlice({
    name: "write",

    initialState: {
        writeList: [],
        // writeList: [
        //     {id: 0, date: '2022-06-03', emotion: 5, content: '끔찍함'},
        //     {id: 1, date: '2022-06-03', emotion: 5, content: '끔찍함'},
        //     {id: 2, date: '2022-06-03', emotion: 5, content: '끔찍함'}
        // ],
    },

    reducers: {
        create: (state, action) => {
            return {
                ...state,
                writeList: state.writeList.concat({
                    id: id++,
                    date: new Date(action.payload.date).getTime(),
                    content: action.payload.content,
                    emotion: action.payload.emotion,
                }),
            };
        },
        update: (state, action) => {
            return {
                ...state,
                writeList: "",
            };
            ///{date: '2022-06-03', emotion: 5, content: '끔찍함'} 이렇게 생긴 객체가 온다.
        },

        remove: (state, action) => {
            return {
                ...state,
                writeList: state.writeList.filter((it) => it.id !== action.payload),
            };
        },
    },
});

export const { create, remove, update } = write.actions;

export default write.reducer;
