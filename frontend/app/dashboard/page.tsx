"use client"

import { useEffect,useState } from "react"
import api from "../../lib/api"
import { useRouter } from "next/navigation"

export default function Dashboard(){

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tasks,setTasks] = useState<any[]>([])
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const router = useRouter()

const logout = () => {
  localStorage.removeItem("token")
  router.push("/")
}
  const fetchTasks = async()=>{
    const res = await api.get("/tasks")
    setTasks(res.data)
  }

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks()
  },[])

  const createTask = async()=>{
    await api.post("/tasks",{title,description})
    setTitle("")
    setDescription("")
    fetchTasks()
  }

  const deleteTask = async(id:string)=>{
    await api.delete(`/tasks/${id}`)
    fetchTasks()
  }

  return(

  <div className="center-page">

    <div className="card">

      <h1>Task Dashboard</h1>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

      <input
        placeholder="Task title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />

      <button onClick={createTask}>
        Create Task
      </button>

      <div>

        {tasks.map((task)=>(
          <div key={task.id} className="task-card">

            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <button onClick={()=>deleteTask(task.id)}>
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>

  </div>

)
}