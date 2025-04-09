import { useEffect, useState } from "react"
import axios from "axios"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

    const baseurl = "http://localhost:3005/todos"
export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const getData = async () => {
        const data = await axios.get(baseurl);
        console.log(data.data);
        let tm = data.data.map(item => 
            <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} handleDelete={handleDelete} handleToggle={handleToggle}/>
        );
        setTodos(tm);
    }

    const addTodo = async (text, completed) => {
        const resp = await axios.post(baseurl, {
            text: text,
            completed: completed
        })
        console.log(resp.data)
        getData();
    }

    const handleDelete = async (id) => {
        const resp = await axios.delete(baseurl + `/${id}`);
        console.log(resp.data)
        getData();
    }

    const handleToggle = async (id) => {
        const resp = await axios.get(baseurl + `/${id}`);
        const todo = resp.data;

        const done = todo.completed == "O" ? "X" : "O";
        await axios.patch(baseurl + `/${id}`, {
            completed : done
        });
        getData();
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <TodoForm addTodo={addTodo}/>
      <div className="w-10/12 mt-10 flex flex-col justify-center">
        {todos}
      </div>
    </div>
  )
}
