function Todolist({todos,setTodos,setEdit}){

    const handledelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id ));
    };
    const handlEdit=(id)=>{
        const findtodo = todos.find((item)=> item.id === id);
        setEdit(findtodo);
    }


    const handleComplete = (id) => {
        setTodos(todos.map((item) => {
            if(item.id === id){
                return {...item, completed: !item.completed};
            }
            return item;
        }));
    }

    


    return(
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                        type="text"
                        value={todo.title}
                        className={` list ${todo.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo.id)}>
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                        </button>
                        <button className="button-edit task-button" onClick={()=>(handlEdit(todo.id))} >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handledelete(todo.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default Todolist;