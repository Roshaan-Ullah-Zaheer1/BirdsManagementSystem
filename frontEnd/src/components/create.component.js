import React,{ useState } from 'react';
import axios from 'axios'; 
import { Dropdown, Select } from 'bootstrap';

const CreateBird=()=>{
    const [birdName, setBirdName] = useState('');
    const [ringNumber, setRingNumber] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [cageNumber, setCageNumber] = useState('');
    const [farmBreed, setFarmBreed] = useState(false);
    const [purchased, setPurchased] = useState(false);
    //const [isPaired, setIsPaired] = useState(false);
    const options = [
        '', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'
      ];
      const [selectedValue , setSelectedValue ] = useState(options[0]);
      const handleFilterInput = (event) => {
        let value = event.target.options;
        setSelectedValue(value);
    };
    const onChangeBirdName=(e)=> {
        setBirdName(e.target.value);
    }
    const onChangeRingNumber=(e)=> {
        setRingNumber(e.target.value);
    }
    const onChangeGender=(e)=> {
        setGender(e.target.value);
    }
    const onChangeAge=(e)=> {
        setAge(e.target.value);
    }
    const onChangeCageNumber=(e)=> {
        setCageNumber(e.target.value);
    }
    const onChangeFarmPurchased=(e)=> {
        if(e.target.value == "FarmBreed")
        {
            setFarmBreed(true);
            setPurchased(false);
        }
        else
        {   
            setFarmBreed(false);
            setPurchased(true);
        }
    }
    const onSubmit=(e) =>{
        e.preventDefault();  
        console.log(`Form submitted:`);
        console.log(`Bird Name: ${birdName}`);
        console.log(`Ring Number: ${ringNumber}`);
        console.log(`Gender: ${gender}`);
        console.log(`Age: ${age}`);
        console.log(`Cage Number: ${cageNumber}`);
        const newBird = {
            add_birdname: birdName,
            add_ringnumber: ringNumber,
            add_gender: gender,
            add_age: age,
            add_cagenumber: cageNumber
        };

        axios.post('http://localhost:4000/todos/add', newBird)
            .then(res => console.log(res.data));
        this.setState({
            add_birdname: '',
            add_ringnumber: '',
            add_gender: '',
            add_age: '',
            add_cagenumber: ''
        })
    }
    
        return (
            <div>
                <div style={{marginTop: 10}}>
                <h3>Add Bird</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group"> 
                        <label>Bird Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={birdName}
                                onChange={onChangeBirdName}
                                />
                                
                    </div>
                    <div className="form-group">
                        <label>Ring Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={ringNumber}
                                onChange={onChangeRingNumber}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Gender: </label>
                        <input  type="text"
                                className="form-control"
                                value={gender}
                                onChange={onChangeGender}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Age: </label>
                        <input  type="text"
                                className="form-control"
                                value={age}
                                onChange={onChangeAge}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Cage Number: </label>
                        <input  type="text"
                                className="form-control"
                                value={cageNumber}
                                onChange={onChangeCageNumber}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="FarmBreed" 
                                    value="FarmBreed"
                                    checked={farmBreed===true} 
                                    onChange={onChangeFarmPurchased}
                                    />
                            <label className="form-check-label">FarmBreed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="PurchasedFromMarket" 
                                    value="Purchased" 
                                    checked={purchased===true} 
                                    onChange={onChangeFarmPurchased}
                                    />
                            <label className="form-check-label">PurchasedFromMarket</label>
                        </div>                    
                    </div>

                   {farmBreed && <div className="form-group"> 
                        <label>Father Name:</label>
                        <input  type="text"
                                className="form-control"
                                value={cageNumber}
                                onChange={onChangeCageNumber}
                        />
                        <label>Father Ring Number:</label>
                        <input  type="text"
                        className="form-control"
                        value={cageNumber}
                        onChange={onChangeCageNumber}
                        />
                    </div>
                    }
                    {purchased &&
                        <div className="form-group"> 
                        <label>DEF: </label>
                        <input  type="text"
                                className="form-control"
                                value={"abc"}
                                />  </div> }
                                            <Select options={options} onChange={handleFilterInput} value={selectedValue} placeholder="Select a region"/>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            </div>
        )
    }

export default CreateBird; 