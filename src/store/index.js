import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie( state, action ) {
            state.push(action.payload);
        },
        removeMovie( state, action ) {
            return state.filter(( songName ) => {
                return songName !== action.payload;
            });

            // const index = state.indexOf(action.payload);
            // state.splice(index, 1);
        },
        reset( state, action ) {
            return [];
        }
    }
});

const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong( state, action ) {
            state.push(action.payload);
        },
        removeSong( state, action ) {
            return state.filter(( songName ) => {
                return songName !== action.payload;
            });

            // const index = state.indexOf(action.payload);
            // state.splice(index, 1);
        },
        reset( state, action ) {
            return [];
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: moviesSlice.reducer,
    }
});

export { store };
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
