import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:"1",
        title:"task 1",
        description:"task description",
        completed:false
    },
    {
        id:"2",
        title:"task 2",
        description:"task description",
        completed:false
    }
]
    
const taskSlice=createSlice(
    {
        name:'tasks',
        initialState,
        reducers:{

        }
    }
)

export default taskSlice.reducer