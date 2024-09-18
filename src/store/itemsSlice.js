import{createSlice} from "@reduxjs/toolkit"

const itemSlice = createSlice({
  name: "items",
  initialState:[],
  reducers:{
    addInitialItems:(store,action)=>{
      console.log(action)
      
      return action.payload[0]
    }
  }
})


export const itemActions = itemSlice.actions
export default itemSlice



