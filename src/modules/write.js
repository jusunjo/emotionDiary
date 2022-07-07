import { createSlice } from "@reduxjs/toolkit";

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
                    unique: Math.floor(Math.random() * new Date()),
                    date: new Date(action.payload.date).getTime(),
                    content: action.payload.content,
                    emotion: action.payload.emotion,
                }),
            };
        },
        update: (state, action) => {
            return {
                ...state,
                writeList: [
                    ...state.writeList,
                    state.writeList.forEach((it) => {
                        if (it.unique == action.payload.unique) {
                            return { unique: action.payload.unique, date: 1656028800000, content: action.payload.content, emotion: action.payload.emotion };
                        }
                    }),
                ],

                //  state.writeList.forEach((it) => {
                //     if (it.unique === action.payload.unique) {
                //         return console.log(it);
                //     }
                // }),
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
