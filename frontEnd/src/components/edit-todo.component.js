// import React, { useEffect,useState  } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const EditTodo=()=>{
//     const { id } = useParams();

//     const [description, setDescription] = useState('');
//     const [responsible, setResponsible] = useState('');
//     const [priority, setPriority] = useState('');
//     const [complete, setComplete] = useState(false);

//     // first time load
//     // when any state changes
//     // when component unmount
//     useEffect(()=>{
//         axios.get('http://localhost:4000/todos/'+id)
//             .then(response => {
//                 setDescription(response.data.todo_description);
//                 setResponsible(response.data.todo_responsible);
//                 setPriority(response.data.todo_priority);
//                 setComplete(response.data.todo_completed);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     });

//     const onChangeTodoDescription = (e) => {
//         setDescription(e.target.value);
//     }

//     const onChangeTodoResponsible = (e) => {
//         setResponsible(e.target.value);
//     }

//     const onChangeTodoPriority = (e) => {
//         setPriority(e.target.value);
//     }

//     const onChangeTodoCompleted = (e) => {
//         setComplete(!complete);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const obj = {          
//             todo_description: description,
//             todo_responsible:responsible,
//             todo_priority:priority,
//             todo_completed:complete
//         };
//         axios.post('http://localhost:4000/todos/update/'+id, obj)
//             .then(res => console.log(res.data));   
//         this.props.history.push('/');
//     }
//         return (
//             <div>
//                 <h3 align="center">Update Todo</h3>
//                 <form onSubmit={onSubmit}>
//                     <div className="form-group"> 
//                         <label>Description: </label>
//                         <input  type="text"
//                                 className="form-control"
//                                 value={description}
//                                 onChange={onChangeTodoDescription}
//                                 />
//                     </div>
//                     <div className="form-group">
//                         <label>Responsible: </label>
//                         <input 
//                                 type="text" 
//                                 className="form-control"
//                                 value={responsible}
//                                 onChange={onChangeTodoResponsible}
//                                 />
//                     </div>
//                     <div className="form-group">
//                         <div className="form-check form-check-inline">
//                             <input  className="form-check-input" 
//                                     type="radio" 
//                                     name="priorityOptions" 
//                                     id="priorityLow" 
//                                     value="Low"
//                                     checked={priority==='Low'} 
//                                     onChange={onChangeTodoPriority}
//                                     />
//                             <label className="form-check-label">Low</label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input  className="form-check-input" 
//                                     type="radio" 
//                                     name="priorityOptions" 
//                                     id="priorityMedium" 
//                                     value="Medium" 
//                                     checked={priority==='Medium'} 
//                                     onChange={onChangeTodoPriority}
//                                     />
//                             <label className="form-check-label">Medium</label>
//                         </div>
//                         <div className="form-check form-check-inline">
//                             <input  className="form-check-input" 
//                                     type="radio" 
//                                     name="priorityOptions" 
//                                     id="priorityHigh" 
//                                     value="High" 
//                                     checked={priority==='High'} 
//                                     onChange={onChangeTodoPriority}
//                                     />
//                             <label className="form-check-label">High</label>
//                         </div>
//                     </div>
//                     <div className="form-check">
//                         <input  className="form-check-input"
//                                 id="completedCheckbox"
//                                 type="checkbox"
//                                 name="completedCheckbox"
//                                 onChange={onChangeTodoCompleted}
//                                 checked={complete}
//                                 value={complete}
//                                 />
//                         <label className="form-check-label" htmlFor="completedCheckbox">
//                             Completed
//                         </label>                        
//                     </div>

//                     <br />

//                     <div className="form-group">
//                         <input type="submit" value="Update Todo" className="btn btn-primary" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }

// export default EditTodo; 



import React, { useEffect,useState  } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditTodo=()=>{
    const { id } = useParams();

    const [birdname, setBirdname] = useState('');
    const [ringnumber, setRingnumber] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [cagenumber, setCagenumber] = useState('');
    const [farmpurchased1, setFarmpurchased1] = useState('');
    const [farmpurchased, setFarmpurchased] = useState(false);

    // first time load
    // when any state changes
    // when component unmount
    useEffect(()=>{
        axios.get('http://localhost:4000/todos/'+id)
            .then(response => {
                setBirdname(response.data.todo_birdname);
                setRingnumber(response.data.todo_ringnumber);
                setGender(response.data.todo_gender);
                setAge(response.data.todo_age);
                setCagenumber(response.data.todo_cagenumber);
                setFarmpurchased1(response.data.todo_farmpurchased1);
                setFarmpurchased(response.data.todo_farmpurchased);
            })
            .catch(function (error) {
                console.log(error);
            })
    });

    const onChangeTodoBirdname = (e) => {
        setBirdname(e.target.value);
    }

    const onChangeTodoRingnumber = (e) => {
        setRingnumber(e.target.value);
    }

    const onChangeTodoGender = (e) => {
        setGender(e.target.value);
    }

    const onChangeTodoAge = (e) => {
        setAge(e.target.value);
    }

    const onChangeTodoCagenumber = (e) => {
        setCagenumber(e.target.value);
    }
    const onChangeTodoFarmpurchased1=(e)=> {
        setFarmpurchased1(e.target.value);
    }
    const onChangeTodoFarmpurchased = (e) => {
        setFarmpurchased(!farmpurchased);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            todo_birdname: birdname,
            todo_ringnumber: ringnumber,
            todo_gender: gender,
            todo_age: age,
            todo_cagenumber: cagenumber,
            todo_farmpurchased1: farmpurchased1,
            todo_farmpurchased: farmpurchased
        };
        axios.post('http://localhost:4000/todos/update/'+id, obj)
            .then(res => console.log(res.data));   
        this.props.history.push('/');
    }
        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group"> 
                        <label>Bird Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={birdname}
                                onChange={onChangeTodoBirdname}
                                />
                    </div>
                    <div className="form-group">
                        <label>Ring Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={ringnumber}
                                onChange={onChangeTodoRingnumber}
                                />
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={gender}
                                onChange={onChangeTodoGender}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={age}
                                onChange={onChangeTodoAge}
                                />
                    </div>
                    <div className="form-group">
                        <label>Ring Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={cagenumber}
                                onChange={onChangeTodoCagenumber}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Farm Breed or Market Purchased: </label>
                        <input  type="text"
                                className="form-control"
                                value={farmpurchased1}
                                onChange={onChangeTodoFarmpurchased1}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityFarmBreed" 
                                    value="FarmBreed"
                                    checked={farmpurchased1==='FarmBreed'} 
                                    onChange={onChangeTodoFarmpurchased1}
                                    />
                            <label className="form-check-label">FarmBreed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityPurchasedFromMarket" 
                                    value="PurchasedFromMarket" 
                                    checked={farmpurchased1==='PurchasedFromMarket'} 
                                    onChange={onChangeTodoFarmpurchased1}
                                    />
                            <label className="form-check-label">PurchasedFromMarket</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={onChangeTodoFarmpurchased}
                                checked={farmpurchased}
                                value={farmpurchased}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

export default EditTodo; 