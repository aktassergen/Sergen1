export function TodoList(){
    const[todos,setTodos]=useState([])

    // ['todo1','todo2','todo3']
    return<ul>
    {
        todos.map(todo=><li>
            {todo}
        </li>)
    }
    </ul>
}