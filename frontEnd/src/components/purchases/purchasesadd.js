import React, { useState } from 'react';
import axios from 'axios';
import MiddleWrapper from './../layout/MiddleWrapper'; 
const PurchaseBirdAdd = () => {
    const fatherDetails = [
        { label: 'Blue Opline/ZBF162216', value: 'Blue Opline/ZBF162216' },
        { label: 'Green Opline/ZBF162221', value: 'Green Opline/ZBF162221' },
        { label: 'Slatty Opline/ZBF162256', value: 'Slatty Opline/ZBF162256' },
    ];
    const motherDetails = [
        { label: 'Blue Opline/ZBF162216', value: 'Blue Opline/ZBF162216' },
        { label: 'Green Opline/ZBF162221', value: 'Green Opline/ZBF162221' },
        { label: 'Slatty Opline/ZBF162256', value: 'Slatty Opline/ZBF162256' },
    ];
    const genderOptions = [
        { label: 'Unknown', value: 'Unknown' },
        { label: 'DNA Male', value: 'DNA Male' },
        { label: 'DNA Female', value: 'DNA Female' },
        { label: 'Expected Male', value: 'Expected Male' },
        { label: 'Expected Female', value: 'Expected Female' }
    ];
    const [farmBreedFather, setFarmBreedFather] = useState('');
    const [farmBreedMother, setFarmBreedMother] = useState('');
    const [birdName, setBirdName] = useState('');
    const [ringNumber, setRingNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState(genderOptions[0]);
    const [cageNumber, setCageNumber] = useState('');
    const [farmBreed, setFarmBreed] = useState(false);
    const [purchased, setPurchased] = useState(false);
    const [isPaired, setIsPaired] = useState(false);
    const [hatchDate, setHatchDate] = useState('');
    const [purchasedId, setPurchasedId] = useState('');
    const [purchasedRate, setPurchasedRate] = useState('');
    const [purchasedDate, setPurchasedDate] = useState('');
    const [purchasedDetails, setPurchasedDetails] = useState('');
    const [purchaserName, setPurchaserName] = useState('');
    const [purchaserContactNumber, setPurchaserContactNumber] = useState('');

    const onChangeBirdName = (e) => {
        setBirdName(e.target.value);
    }
    const onChangeRingNumber = (e) => {
        setRingNumber(e.target.value);
    }
    const onGenderChange = (e) => {
        setGender(e.value);
    }
    const onChangeAge = (e) => {
        setAge(e.target.value);
    }
    const onChangeCageNumber = (e) => {
        setCageNumber(e.target.value);
    }
    const onChangeIsPaired = (e) => {
        setIsPaired(!isPaired);
    }
    const onChangeFarmPurchased = (e) => {
        if (e.target.value === "FarmBreed") {
            setFarmBreed(true);
            setPurchased(false);
        }
        else {
            setFarmBreed(false);
            setPurchased(true);
        }
    }
    const onChangeFatherFarmBreed = (e) => {
        setFarmBreedFather(e.value);
    }
    const onChangeMotherFarmBreed = (e) => {
        setFarmBreedMother(e.value);
    }
    const onChangeHatchDate = (e) => {
        setHatchDate(e.target.value);
    }
    const onChangePurchasedId = (e) => {
        setPurchasedId(e.target.value);
    }
    const onChangePurchasedRate = (e) => {
        setPurchasedRate(e.target.value);
    }
    const onChangePurchasedDate = (e) => {
        setPurchasedDate(e.target.value);
    }
    const onChangePurchasedDetails = (e) => {
        setPurchasedDetails(e.target.value);
    }
    const onChangePurchaserName = (e) => {
        setPurchaserName(e.target.value);
    }
    const onChangePurchaserContactNumber = (e) => {
        setPurchaserContactNumber(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted:`);
        console.log(`Bird Name: ${birdName}`);
        console.log(`Ring Number: ${ringNumber}`);
        console.log(`Gender: ${gender}`);
        console.log(`Age: ${age}`);
        console.log(`Cage Number: ${cageNumber}`);
        console.log(`Is Paired: ${isPaired}`);
        console.log(`Is Purchased: ${purchased}`);
        console.log(`Is FarmBreed: ${farmBreed}`);
        console.log(`Father Details: ${farmBreedFather}`);
        console.log(`Mother Details: ${farmBreedMother}`);
        console.log(`Hatch Date: ${hatchDate}`);
        console.log(`Purhcased Id: ${purchasedId}`);
        console.log(`Purhcased Rate: ${purchasedRate}`);
        console.log(`Purhcased Date: ${purchasedDate}`);
        console.log(`Purhcased Details: ${purchasedDetails}`);
        console.log(`Purhcaser Name: ${purchaserName}`);
        console.log(`Purhcaser Contact No: ${purchaserContactNumber}`);

        const newBird = {
            name: birdName,
            ringNumber: ringNumber,
            gender: gender,
            age: age,
            cageNumber: cageNumber,
            isPurchased: purchased,
            isFarmBreed: farmBreed,
            isPaired: isPaired,
        };
        const newpurchasedBird = {
            purchasedId: purchasedId,
            purchasedRate: purchasedRate,
            purchasedDate: purchasedDate,
            purchasedDetails: purchasedDetails,
            purchaserName: purchaserName,
            purchaserContactNumber: purchaserContactNumber
        };
        const newfarmBreedBird = {
            fatherId: farmBreedFather,
            motherId: farmBreedMother,
            hatchDate: hatchDate
        };

        axios.post('http://localhost:4000/bird/add', newBird)
            .then(res => console.log(res.data));
        //setBirdName('');
        setRingNumber('');
        setGender('');
        setAge('');
        setCageNumber('');
        setPurchased(false);
        setFarmBreed(false);
        setIsPaired(false);
        axios.post('http://localhost:4000/purchased/add', newpurchasedBird)
            .then(res => console.log(res.data));
        setPurchasedId('');
        setPurchasedRate('');
        setPurchasedDate('');
        setPurchasedDetails('');
        setPurchaserName('');
        setPurchaserContactNumber('');
        axios.post('http://localhost:4000/farmbreed/add', newfarmBreedBird)
            .then(res => console.log(res.data));
        setFarmBreedFather('');
        setFarmBreedMother('');
        setHatchDate('');
    }
    return (
        <MiddleWrapper heading={"Add Purchase bird"}>
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-default">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purchase Bird Date</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Record Number " />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Bird Name</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2" placeholder="Record Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Bird ID Number</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Ring Number</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label>Gender</label>
                                        <select className="form-control select2" style={{ "width": "100%" }}>
                                            <option >Unknown</option>
                                            <option>DNA Male</option>
                                            <option>DNA Female</option>
                                            <option>Expected Male</option>
                                            <option>Expected Female</option>
                                        </select>
                                    </div>                                
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Age</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purcahse Price</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Seller Name</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Seller Phone Number</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Seller Details</label>
                                        <input type="password" className="form-control" id="exampleInputPasswor2d1" placeholder="Record Number" />
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
        </MiddleWrapper>
    );
}

export default PurchaseBirdAdd;





