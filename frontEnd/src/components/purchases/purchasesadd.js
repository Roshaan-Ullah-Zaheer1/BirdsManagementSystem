import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiddleWrapper from './../layout/MiddleWrapper'; 
const PurchaseBirdAdd = () => {

    const [purchasedDate, setPurchasedDate] = useState('');
    const [birds, setBirds] = useState(null);
    const [birdIdNumber, setBirdIdNumber] = useState('');
    const [purchasedPrice, setPurchasedPrice] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerPhoneNumber, setSellerPhoneNumber] = useState('');
    const [sellerDetails, setSellerDetails] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:4000/bird/')
            .then((res) => {
                let data = res.data;
                let transformedData = data.map((item) => {
                    return (<option value={item._id}>{item.serialNumber}</option>);
                });
                setBirds(transformedData);
            })
            .catch(err=>{
                console.log(err);
            });
    },[]);
    const onSubmit = (e) => {
        e.preventDefault();
        const purchasedBird = {
            purchasedDate: purchasedDate,
            bird: birdIdNumber,
            purchasedPrice: purchasedPrice,
            sellerName: sellerName,
            sellerPhoneNumber: sellerPhoneNumber,
            sellerDetails: sellerDetails
        };
        console.log(purchasedBird);
        axios.post('http://localhost:4000/purchased/add', purchasedBird)
            .then((response) => { 
                clearForm();
               // return response.data
            
            })
            .catch(err => {
                console.log(err);
            });
    }

    const clearForm = () => {
        setPurchasedDate('');
        setBirdIdNumber(0);
        setPurchasedPrice('');
        setSellerDetails('');
        setSellerName('');
        setSellerPhoneNumber('');
    }
    return (
        <MiddleWrapper heading={"Add Purchase bird"}>
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-default">
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purchase Bird Date</label>
                                        <input type="text" value={purchasedDate} onChange={(e) => { setPurchasedDate(e.target.value) }} className="form-control"/>
                                    </div>
                                    
                                    <div className="form-group col-md-6">
                                        <label >Bird ID Number</label>
                                        <select className="form-control select2" onChange={(e) => { setBirdIdNumber(e.target.value); }} style={{ "width": "100%" }}>
                                            {birds}
                                        </select>                                 
                                   </div>   
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purchased Price</label>
                                        <input type="text"  value={purchasedPrice} onChange={(e) => { setPurchasedPrice(e.target.value) }} className="form-control"  />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Seller Name</label>
                                        <input type="text"  value={sellerName} onChange={(e) => { setSellerName(e.target.value) }} className="form-control"  />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Seller Phone Number</label>
                                        <input type="number" min="0" value={sellerPhoneNumber} onChange={(e) => { setSellerPhoneNumber(e.target.value) }} className="form-control"  />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Seller Details</label>
                                        <input type="text"  value={sellerDetails} onChange={(e) => { setSellerDetails(e.target.value) }} className="form-control"  />
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





