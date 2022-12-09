import React, { useState } from 'react';
import axios from 'axios'; 

const CreateTodo=()=>{

    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');
    const [complete, setComplete] = useState(false);

    const onChangeTodoDescription=(e)=> {
        setDescription(e.target.value);
    }

    const onChangeTodoResponsible=(e)=> {
        setResponsible(e.target.value);
    }
    
    const onChangeTodoPriority = (e) => {
        setPriority(e.target.value);
    }

    const onSubmit=(e) =>{
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${description}`);
        console.log(`Todo Responsible: ${responsible}`);
        console.log(`Todo Priority: ${priority}`);
        const newTodo = {
            todo_description: description,
            todo_responsible: responsible,
            todo_priority: priority,
            todo_completed: complete
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }
        return (
            <div>
                <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={description}
                                onChange={onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={responsible}
                                onChange={onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={priority==='Low'} 
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={priority==='Medium'} 
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={priority==='High'} 
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
        )
    }

export default CreateTodo; 
