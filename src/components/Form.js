import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ input, setInput,todos, setTodos,edit,setEdit }) {
  const updateTodo =(title,id,completed)=>{
    const newtodo = todos.map((item)=>
      item.id === id ? {title,id,completed} : item
    )
    setTodos(newtodo);
    setEdit("");

  }
  useEffect(()=>{
   if(edit){
    setInput(edit.title)
   } else {
    setInput("");
   }
  },[setInput,edit])

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!edit){
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");}
    else{
     updateTodo(input,edit.id,edit.completed)
    }
   
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {edit ? "OK" : "Add"}
      </button>
    </form>
  );
}

export default Form;