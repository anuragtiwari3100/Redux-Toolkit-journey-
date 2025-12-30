import { createSlice } from "@reduxjs/toolkit";



const initialState = {
      value:0
    };

export const  counterSlice = createSlice({
    name : 'counter',
    // initialState:{
    //     value:0
    // },
    initialState,
    reducers:{
    
        addition:x =>{
            x.value +=1;
        },
        subtraction:state =>{
            state.value -=1;
        },
        incrementByAmount :(state,action) =>{
            state.value += Number(action.payload);
        },
        reset:(state)=>{
            state.value =0;
        }

    }
})

export const {addition,subtraction, incrementByAmount,reset} = counterSlice.actions
export default counterSlice.reducer;


 

