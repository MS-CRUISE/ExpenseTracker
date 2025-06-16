import { useState } from 'react';
function TodoList(){
    const [task,setTask]=useState([]);
    const [newTask,setNewTask]=useState();

    function LetterChange(event){
setNewTask(event.target.value);
    }
    function AddTask(){
        if(newTask.trim()!="")
setTask(task=>[...task,newTask]);
setNewTask("");
    }
    function DeleteTask(index){
        const updatedTsk=task.filter((_,i)=>i!=index)
    setTask(updatedTsk);

    }
 
    return(
    <div >
        <h2 className="text-3xl justify-center font-black">My First Proper To Do List</h2>
        <div >
            <input type="text"
            placeholder="Enter a new Task"
           value={newTask}
           onChange={LetterChange}/>
           <button onClick={AddTask} className="bg-slate-400">Add</button>
        </div>
        <ol>
            {task.map((task,index)=><li key={index}>
                <span>{task}</span>
                <button className="bg-slate-500" onClick={()=>DeleteTask(index)}>Delete</button>
                </li>)}
        </ol>
    </div>
    );
}
export default TodoList;