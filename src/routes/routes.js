import CreateTodo from "../pages/CreateTodo";
import TodoList from "../pages/TodoList";

const routes = [
  {
    element:<TodoList/>,
    path:'/'
    
  },
  
  
  {
    element: <CreateTodo/>,
    path:'/create'

  }
  
] 
export default routes