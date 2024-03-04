import { useState , useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const storedTodos = localStorage.getItem('todos');
  const initialState = storedTodos ? JSON.parse(storedTodos):[];
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [edit,setEdit]=useState(null)
  useEffect (()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="App">
      <div className='container'>
        <div className='app-warpper' >
          <div>
          <Header/>
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              edit={edit}
              setEdit={setEdit}
              />
          </div>
          <div>
         < Todolist todos={todos} setTodos={setTodos} setEdit={setEdit}/>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;