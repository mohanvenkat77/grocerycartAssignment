import { createSlice } from "@reduxjs/toolkit";
const initialState={
  cart:[],
  total:0
}
const cartReducers=createSlice({

  name:"cartReducer",
  initialState,
  reducers:{
      increment:(state,action)=>{
        state.cart.push(action.payload);
        const price=state.cart.map(obj=> obj.price)
        state.total=price.reduce((a,b)=>a+b)
        console.log(state.total)
      },
      decrement:(state,action)=>{
        const ind=state.cart.findIndex(obj=> obj.name===action.payload.name);
        console.log(action.payload.name)
        if(ind>-1){
          console.log(ind)
          state.cart.splice(ind,1)
        }
        const price=state.cart.map(obj=> obj.price)
       if(price>0)
       {state.total=price.reduce((a,b)=>a+b,0)}
      },
      getToatl(state,action){
        let price=0
         price=state.cart.map(obj=> obj.price)

        state.total=price?.reduce((a,b)=>a+b,0)
    },
    clearcart(state,action){
      state.cart=[]
    }
  }

})

export const {increment,decrement,getToatl,clearcart}=cartReducers.actions
export default cartReducers.reducer