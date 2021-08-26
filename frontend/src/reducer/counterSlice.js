import {createSlice} from "@reduxjs/toolkit"
const initialState={
    count:4
}
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count=state.count+1;

        },
        decrement:(state)=>{
            state.count=state.count-1;
        }
    }
})

export const {name} = counterSlice;

// export const count = useSelector(state => state.count)

export const {
    increment,decrement
}= counterSlice.actions;

export default counterSlice.reducer;