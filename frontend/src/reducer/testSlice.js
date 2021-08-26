import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:100
}
export const testSlice = createSlice({
    name: "test",
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
export const selectCount = (state)=>state.test.value;

export const {
    sum,minus,sumByAmount
}= testSlice.actions;

export default testSlice.reducer;