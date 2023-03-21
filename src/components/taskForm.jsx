import { useState } from "react"

export const  TaskForm=()=>{
    const [task,setTask]=useState({
        title:'',
        description:''
    })

    const handleChange=(e)=>{
        setTask({...task,
        [e.target.name]:e.target.value})
        console.log(task)
    }
 return(
    <form>
        <input type='text' name='title'placeholder="title..." onChange={handleChange}/>
        <textarea name='description'placeholder="description..." onChange={handleChange}/>
        <button>save</button>
    </form>
 )
}