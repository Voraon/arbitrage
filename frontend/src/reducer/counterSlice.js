import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:4
}
export const demoSlice = createSlice({
    name: "count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;

        },
        decrement:(state)=>{
            state.value+=-1;
        },
        
    incrementByAmount: (state, {payload}) => {
        state.value += payload;
      },
    }
})

export const {name} = demoSlice;
export const selectCount = (state)=>state.count.value;

export const {
    increment,decrement,incrementByAmount
}= demoSlice.actions;

export default demoSlice.reducer;