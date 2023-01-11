import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiddleWrapper from '../layout/MiddleWrapper';
import "./create.css";

import { useParams } from "react-router-dom";

const EditBird = () => {
    const genderOptions = [
        { label: 'Unknown', value: 'Unknown' },
        { label: 'DNA Male', value: 'DNA Male' },
        { label: 'DNA Female', value: 'DNA Female' },
        { label: 'Expected Male', value: 'Expected Male' },
        { label: 'Expected Female', value: 'Expected Female' }
    ];
    const [birdId, setBirdId] = useState(0);

    const [birdIdNumber, setBirdIdNumber] = useState(0);
    const [birdSource, setBirdSource] = useState('Market');
    const [birdName, setBirdName] = useState('');
    const [ringNumber, setRingNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Unknown');
    const [cageNumber, setCageNumber] = useState('');
    const [isPaired, setIsPaired] = useState(false);
    const [isFarmBreed, setIsFarmBreed] = useState(false);

    const [maleBirds, setMaleBirds] = useState(null);
    const [femaleBirds, setFemaleBirds] = useState(null);

    const [farmBreedFather, setFarmBreedFather] = useState('');
    const [farmBreedMother, setFarmBreedMother] = useState('');
    const [hatchDate, setHatchDate] = useState('');


    let { id } = useParams();
    id = id.slice(1);

    useEffect(() => {
        axios.get('http://localhost:4000/bird/' + id)
            .then(res => {
                let data = res.data;
                setBirdId(data._id);
                setBirdIdNumber(data.serialNumber);
                setBirdSource(data.birdSource);
                setBirdName(data.name);
                setRingNumber(data.ringNumber);
                setAge(data.age);
                setGender(data.gender);
                setCageNumber(data.cageNumber);
                setIsPaired(data.isPaired);
                if (data.birdSource == "Farm Breed") {
                    setIsFarmBreed(true);
                    axios.get('http://localhost:4000/farmbreed/getByBird/' + id)
                        .then(res => {
                            let farmBreedObj = res.data;
                            setFarmBreedFather(farmBreedObj.fatherId);
                            setFarmBreedMother(farmBreedObj.motherId);
                            setHatchDate(farmBreedObj.hatchDate);
                            axios.get("http://localhost:4000/bird/getByGender/Male")
                                .then(res => {
                                    let data = res.data;
                                    let transformedData = data.map((item) => {
                                        if(item._id === farmBreedObj.fatherId){
                                            return (<option value={item._id} selected>{item.serialNumber}</option>);
                                        }
                                        else{
                                        return (<option value={item._id} >{item.serialNumber}</option>);}
                                    });
                                    setMaleBirds(transformedData);
                                });
                            axios.get("http://localhost:4000/bird/getByGender/Female")
                                .then(res => {
                                    let data = res.data;
                                    let transformedData = data.map((item) => {
                                        if(item._id === farmBreedObj.motherId){
                                            console.log("in sleected");
                                            return (<option value={item._id} selected>{item.serialNumber}</option>);
                                        }
                                        else{
                                            console.log("in not sleected");
                                        return (<option value={item._id} >{item.serialNumber}</option>);}
                                    });
                                    setFemaleBirds(transformedData);
                                });
                        })
                        .catch(err => {
                            console.log("error in getting data from farm breed");
                        });
                }
                else {
                    setIsFarmBreed(false);
                }
            });
    }, []);


    const onChangeBirdSource = (e) => {
        setBirdSource(e.target.value);
        if (e.target.value === "Market") {
            setIsFarmBreed(false);
        }
        else
            setIsFarmBreed(true);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let id = "";
        const newBird = {
            serialNumber: birdIdNumber,
            name: birdName,
            ringNumber: ringNumber,
            gender: gender,
            age: age,
            cageNumber: cageNumber,
            isPaired: isPaired,
            birdSource: birdSource
        };
        axios.put('http://localhost:4000/bird/update/'+birdId, newBird)
            .then((response) => { return response.data })
            .then(body => {
                if (birdSource == "Farm Breed") {
                    id = body.bird._id;
                    const newfarmBreedBird = {
                        bird: id,
                        fatherId: farmBreedFather,
                        motherId: farmBreedMother,
                        hatchDate: hatchDate
                    };
                    // axios.post('http://localhost:4000/farmbreed/update/', newfarmBreedBird)
                    //     .then(res => {
                    //         alert("Bird updated successfully!");
                    //         console.log(res.data);
                    //     })
                    //     .catch(err => {
                    //         console.log(err);
                    //     })
                }
                else {
                    alert("Bird updated successfully!");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <MiddleWrapper heading={"Edit a bird"}>
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-default">
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label >Bird ID Number</label>
                                        <input type="number" min="0" value={birdIdNumber} onChange={(e) => { setBirdIdNumber(e.target.value) }} className="form-control" placeholder="ID Number" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label >Bird Name</label>
                                        <input type="text" value={birdName} onChange={(e) => { setBirdName(e.target.value) }} className="form-control" placeholder="Bird Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Ring Number</label>
                                        <input type="text" value={ringNumber} onChange={(e) => { setRingNumber(e.target.value) }} className="form-control" placeholder="Ring Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Gender</label>
                                        <select value={gender} onChange={(e) => { setGender(e.target.value) }} className="form-control select2" style={{ "width": "100%" }}>
                                            <option>Non DNA</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Expected Male</option>
                                            <option>Expected Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Age</label>
                                        <input type="text" value={age} onChange={(e) => { setAge(e.target.value) }} className="form-control" placeholder="Age" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Cage Number</label>
                                        <input type="text" value={cageNumber} onChange={(e) => { setCageNumber(e.target.value) }} className="form-control" placeholder="Cage Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Pairing Status</label>
                                        <select className="form-control select2" value={isPaired} onChange={(e) => { setIsPaired(!isPaired) }} style={{ "width": "100%" }}>
                                            <option value={false} >Not Paired</option>
                                            <option value={true}>Paired</option>
                                        </select>
                                    </div>   <div className="form-group col-md-6">
                                        <label>Bird Source</label>
                                        <select value={birdSource} onChange={onChangeBirdSource} className="form-control select2" style={{ "width": "100%" }}>
                                            <option key="Market" value="Market">Market</option>
                                            <option key="Farm Breed" value="Farm Breed">Farm Breed</option>
                                        </select>
                                    </div>
                                    {isFarmBreed &&
                                        <>
                                            <div className="form-group col-md-6">
                                                <label>Father Details</label>
                                                <select className="form-control select2" onChange={(e) => { setFarmBreedFather(e.target.value); }} style={{ "width": "100%" }}>
                                                    {maleBirds}
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Mother Details</label>
                                                <select className="form-control select2" onChange={(e) => { setFarmBreedMother(e.target.value); }} style={{ "width": "100%" }}>
                                                    {femaleBirds}
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label >Hatch Date: </label>
                                                <input type="text" value={hatchDate} onChange={(e) => { setHatchDate(e.target.value) }} className="form-control" placeholder="Hatch Date" />
                                            </div>
                                        </>}
                                    {!isFarmBreed && <div className="form-group col-md-12 marketMsg">After sumbitting this form please add purchase details of bird in purchase form!</div>}
                                </div>
                                <div className="row">
                                    <button type="submit" className="btn btn-success submit_button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MiddleWrapper>
    );
}

export default EditBird;





