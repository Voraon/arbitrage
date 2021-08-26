import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:0
}
export const testSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        sum:(state)=>{
            state.value+=1;

        },
        minus:(state)=>{
            state.value+=-1;
        },
        
    sumByAmount: (state, {payload}) => {
        state.value += payload;
      },
    }
})

export const {name} = testSlice;
export const selectCount = (state)=>state.counter.value;

export const {
    sum,minus,sumByAmount
}= testSlice.actions;

export default testSlice.reducer;