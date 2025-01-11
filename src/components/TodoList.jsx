import { Pencil, Trash2 } from 'lucide-react'
import React, { useContext, useState } from 'react'
import Modal from './Modal'
import { Context } from '../context/context'

const TodoList = () => {
const [ModalOpen, setModalOpen] = useState(false)
const {todos, deleteTodos, editTodos} = useContext(Context)
const [editInputValue, setEditInputValue] = useState("")
const [editId, setEditId] = useState(null)

function handleDeleteButton(id){
    deleteTodos(id)
}

function handleEditButtonClick(id){
    const editObj = todos.find(item=> item.id == id)
    setEditInputValue(editObj.text)
    setModalOpen(true)
    setEditId(id)
    
    
}
function handleEditSubmit(ev){
    ev.preventDefault()
    const editData = {
        text: ev.target.todo.value
    }
    ev.target.reset()
    editTodos(editId, editData)
    setModalOpen(false)
}


  return (
    <>
        <div className="w-[500px] space-y-2">
        {todos.map((item, index) => (
            <div
            key={index}
            className="flex items-center gap-2 bg-slate-900/50 p-4 rounded-lg group"
            >
            <div className="flex-1">
                <p className={`text-slate-100`}>
                {item.text}
                </p>
            </div>
            <button
                onClick={()=>handleDeleteButton(index)}
                className="text-slate-500 p-2 rounded-md hover:text-red-400"
            >
                <Trash2 className="h-4 w-4" />
            </button>
            <button
                onClick={()=>handleEditButtonClick(item.id)}
                className="text-slate-500 p-2 rounded-md hover:text-green-400"
            >
                <Pencil className="h-4 w-4" />
            </button>
            </div>
        ))}
        </div>
        <Modal openModal={ModalOpen} setOpenModal={setModalOpen}>
            <form onSubmit={handleEditSubmit} className='mt-8 flex justify-between px-5'>
                <input
                    value={editInputValue}
                    onChange={(e) => setEditInputValue(e.target.value)}
                    type="text"
                    name="todo"
                    placeholder="Add a task"
                    className="flex-1 w-[80%] p-3 rounded-md outline-none bg-slate-900/50 border-slate-700 text-slate-100 placeholder:text-slate-500"
                />
                <button 
                    type="submit"
                    className="bg-pink-100 w-[20%] p-3 text-center rounded-md text-slate-900 hover:bg-pink-200"
                >
                    I Got This!
                </button>
            </form>
        </Modal>
    </>
  )
}

export default TodoList