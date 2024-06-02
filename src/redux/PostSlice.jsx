import {createSlice} from "@reduxjs/toolkit";

const postSlice= createSlice({
    name:'post',
    initialState:{
        postDet:{},
        postInc:{}
    },
    reducers:{
        setPostDet:(state,action) => {
            state.posts = action.payload;
        },
        incrementId: (state) => {
            state.postInc.id += 1;
        }

    }
});
export const {setPostDet,incrementId} = postSlice.actions;
export default postSlice.reducer;