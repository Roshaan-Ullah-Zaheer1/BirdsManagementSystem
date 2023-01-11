import React, { useState,useEffect } from 'react';
import axios from 'axios';
import MiddleWrapper from './../layout/MiddleWrapper'; 
const SoldBirdAdd = () => {

    const [birds, setBirds] = useState(null);
    const [soldBirdIdNumber, setSoldBirdIdNumber] = useState('');
    const [price, setPrice] = useState('');
    const [soldDate, setSoldDate] = useState('');
    const [purchaserDetails, setPurchaserDetails] = useState('');
    const [purchaserName, setPurchaserName] = useState('');
    const [purchaserPhoneNumber, setPurchaserPhoneNumber] = useState('');

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
        const soldBird = {
            soldDate: soldDate,
            bird: soldBirdIdNumber,
            Price: price,
            purchaserName: purchaserName,
            purchaserPhoneNumber: purchaserPhoneNumber,
            purchaserDetails: purchaserDetails
        };
        console.log(soldBird);
        axios.post('http://localhost:4000/sale/add', soldBird)
            .then((response) => { 
             //   clearForm();
               // return response.data  
            })
            .catch(err => {
                console.log(err);
            });
    }

    const clearForm = () => {
        setSoldDate('');
        setSoldBirdIdNumber(0);
        setPrice('');
        setPurchaserDetails('');
        setPurchaserName('');
        setPurchaserPhoneNumber('');
    }
    return (
        <MiddleWrapper heading={"Add Sold bird"}>
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-default">
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Sold Bird Date</label>
                                        <input type="text" value={soldDate} onChange={(e) => { setSoldDate(e.target.value) }} className="form-control"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Bird ID Number</label>
                                        <select className="form-control select2" onChange={(e) => { setSoldBirdIdNumber(e.target.value); }} style={{ "width": "100%" }}>
                                            {birds}
                                        </select>                                 
                                   </div>     
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Sold Bird Price</label>
                                        <input type="text"  value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control"  />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purchaser Name</label>
                                        <input type="text"  value={purchaserName} onChange={(e) => { setPurchaserName(e.target.value) }} className="form-control"  />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purchaser Phone Number</label>
                                        <input type="number" min="0" value={purchaserPhoneNumber} onChange={(e) => { setPurchaserPhoneNumber(e.target.value) }} className="form-control"  />
                                    </div>    
                                    <div className="form-group col-md-6">
                                        <label htmlFor="exampleInputPassword1">Purchaser Details</label>
                                        <input type="text"  value={purchaserDetails} onChange={(e) => { setPurchaserDetails(e.target.value) }} className="form-control"  />
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
export default SoldBirdAdd;





