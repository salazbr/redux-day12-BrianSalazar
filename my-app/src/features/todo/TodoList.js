import { useSelector } from "react-redux";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    const todoList = useSelector((state) => state.todoList)
    return 
    
    <TodoGroup todoList={todoList}/>;
};


export default TodoList;