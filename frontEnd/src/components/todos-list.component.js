// import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Todo = props => (
//     <tr>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
//         <td>
//             <Link to={"/edit/"+props.todo._id}>Edit</Link>
//         </td>
//     </tr>
// )

// const TodosList = ()=> {
//     const [todos, setTodos] = useState([]);

//     useEffect(()=>{
//         axios.get('http://localhost:4000/todos/')
//         .then(response => {
//             setTodos(response.data);
//         })
//         .catch(function (error){
//             console.log(error);
//         })
//     });

//     const todoList=()=> {
//         return todos.map(function(currentTodo, i){
//             return <Todo todo={currentTodo} key={i} />;
//         })
//     }

//         return (
//             <div>
//                 <h3>Todos List</h3>
//                 <table className="table table-striped" style={{ marginTop: 20 }} >
//                     <thead>
//                         <tr>
//                             <th>Description</th>
//                             <th>Responsible</th>
//                             <th>Priority</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {todoList() }
//                     </tbody>
//                 </table>
//             </div>
//         )
    
// }

// export default TodosList;

import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_farmpurchased ? 'completed' : ''}>{props.todo.todo_birdname}</td>
        <td className={props.todo.todo_farmpurchased ? 'completed' : ''}>{props.todo.todo_ringnumber}</td>
        <td className={props.todo.todo_farmpurchased ? 'completed' : ''}>{props.todo.todo_gender}</td>
        <td className={props.todo.todo_farmpurchased ? 'completed' : ''}>{props.todo.todo_age}</td>
        <td className={props.todo.todo_farmpurchased ? 'completed' : ''}>{props.todo.todo_cagenumber}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)

const TodosList = ()=> {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/todos/')
        .then(response => {
            setTodos(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
    });

    const todoList=()=> {
        return todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

        return (
            <div>
                <h3>All Birds Data</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Bird Name</th>
                            <th>Ring Number</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Cage Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList() }
                    </tbody>
                </table>
            </div>
        )
    
}

export default TodosList;