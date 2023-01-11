import MiddleWrapper from "../layout/MiddleWrapper";
import axios from 'axios';
import {useState,useEffect} from 'react';

const AddPair = () => {

    const [dateOfPairing, setDateOfPairing] = useState('');
    const [comments, setComments] = useState('');

    const [maleBirds, setMaleBirds] = useState(null);
    const [femaleBirds, setFemaleBirds] = useState(null);

    const [pairFather, setPairFather] = useState('');
    const [pairMother, setPairMother] = useState('');

    useEffect(() => {
        axios.get("http://localhost:4000/bird/getByGender/Male")
            .then(res => {
                let data = res.data;
                let transformedData = data.map((item) => {
                    return (<option value={item._id}>{item.serialNumber}</option>);
                });
                setMaleBirds(transformedData);
                setPairFather(data[0]._id);
            });
        axios.get("http://localhost:4000/bird/getByGender/Female")
            .then(res => {
                let data = res.data;
                let transformedData = data.map((item) => {
                    return (<option value={item._id}>{item.serialNumber}</option>);
                });
                setFemaleBirds(transformedData);
                setPairMother(data[0]._id);
            });
        
    },[]);
    const onSubmit = (e) => {
        e.preventDefault();
        let id = "";
        const pair = {
            maleId: pairFather,
            femaleId: pairMother,
            dateOfPairing: dateOfPairing,
            comments: comments   
        };
        console.log(pair);
        axios.post('http://localhost:4000/pair/add', pair)
            .then((response) => { return response.data })
            .catch(err => {
                console.log(err);
            });
    }
    const clearForm = () => {
       // setFather(0);
        //setMother(0);
        setDateOfPairing('');
        setComments('');  
    }
    return (<MiddleWrapper heading={"Add Pair"}>
        <section className="content">
            <div className="container-fluid">
                <div className="card card-default">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Select Male:</label>
                                    <select className="form-control select2" onChange={(e) => { setPairFather(e.target.value); console.log(e.target.value);}} style={{ "width": "100%" }}>
                                        {maleBirds}
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Select Female:</label>
                                    <select className="form-control select2" onChange={(e) => { setPairMother(e.target.value); }} style={{ "width": "100%" }}>
                                        {femaleBirds}
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Date Of Pairing:</label>
                                    <input type="text" value={dateOfPairing} onChange={(e) => { setDateOfPairing(e.target.value) }} className="form-control"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Comments:</label>
                                    <input type="text" value={comments} onChange={(e) => { setComments(e.target.value) }} className="form-control" placeholder="Optional" />
                                </div>
                            </div>
                            <div className="row">
                                <button type="submit" className="btn btn-success submit_button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </MiddleWrapper>);
}

export default AddPair;