import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function App() {

  return(
    <div className='flex pb-[666px] flex-col items-center pt-[100px] bg-blue-950'>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default App
