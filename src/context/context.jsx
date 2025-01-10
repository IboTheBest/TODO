import { createContext, useState } from"react";
export const Context = createContext()


export const TodoContext = ({children}) =>{
   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
   const saveTodo = (data) => setTodos([...todos, data])

   const deleteTodos = (id)=>{
      const daleteItem = todos.filter(item => item.id === id)
      todos.splice(daleteItem, 1)
      setTodos([...todos])
   }
   const editTodos = (id, data)=>{
      const editedData = todos.find(item => item.id === id)
      editedData.text = data.text
      setTodos([...todos])
   }
localStorage.setItem("todos", JSON.stringify(todos))
   return(
    <Context.Provider value={{todos, setTodos, saveTodo, deleteTodos, editTodos }}>
    {children}
    </Context.Provider> 
   )
}