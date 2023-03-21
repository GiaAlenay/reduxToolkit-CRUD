import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/tasks/taskSlice"
import { v4 as uuid } from "uuid"

export const  TaskForm=()=>{
    const dispatch=useDispatch()
    const [task,setTask]=useState({
        title:'',
        description:''
    })


    const handleChange=(e)=>{
        setTask({...task,
        [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(task)
        dispatch(addTask({...task, id:uuid(), completed:false}))
    }
 return(
    <form onSubmit={handleSubmit}>
        <input type='text' name='title'placeholder="title..." onChange={handleChange}/>
        <textarea name='description'placeholder="description..." onChange={handleChange}/>
        <button type='submit'>save</button>
    </form>
 )
}