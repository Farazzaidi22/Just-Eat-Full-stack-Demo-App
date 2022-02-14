import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getPosts = createAsyncThunk ('posts/getPosts', 
    async () => {
        return fetch('http://localhost:8080/justEat')
        .then((res) => res.json())
        // .catch((err) => {
        //     console.log(err)
        // })
    })


    
const postSlice = createSlice({
    //ts-ignore
    name: "posts",
    
    initialState: {
        posts: [],
        loading: false,
    },

    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false
        }
    }
})

export default postSlice.reducer
