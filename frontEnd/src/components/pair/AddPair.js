import MiddleWrapper from "../layout/MiddleWrapper";
// import "./AllBirds.css";
const AddPair = () => {
    return (<MiddleWrapper heading={"Add Pair"}>
        <section className="content">
            <div className="container-fluid">
                <div className="card card-default">
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Select Male:</label>
                                    <select className="form-control select2" style={{ "width": "100%" }}>
                                        <option >Green Opline/ACP ZBF162298</option>
                                        <option>Blue Opline/ACP ZBF162212</option>
                                        <option>Creamino Opline/ACP ZBF16225</option>
                                        <option>Slatty Opline/ACP ZBF162213</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Select Female:</label>
                                    <select className="form-control select2" style={{ "width": "100%" }}>
                                        <option >Green Opline/ACP ZBF162298</option>
                                        <option>Blue Opline/ACP ZBF162212</option>
                                        <option>Creamino Opline/ACP ZBF16225</option>
                                        <option>Slatty Opline/ACP ZBF162213</option>
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label >Date Of Pairing:</label>
                                    <input type="text" className="form-control" placeholder="Pairing Date" />
                                </div>


                                <div className="form-group col-md-6">
                                    <label >Cage Assigned:</label>
                                    <input type="text" className="form-control" placeholder="Cage Number" />
                                </div>


                                <div className="form-group col-md-6">
                                    <label >Comments:</label>
                                    <input type="text" className="form-control" placeholder="Optional" />
                                </div>

                                {/* <div className="form-group col-sm-6">
                                        <label htmlFor="exampleInputEmail1">Origin</label>
                                        <div className="form-check farmbreed">
                                            <input className="farmbreed" 
                                                    type="radio" 
                                                    name="priorityOptions" 
                                                    id="FarmBreed" 
                                                    value="FarmBreed"
                                                    checked={farmBreed===true} 
                                                    onChange={onChangeFarmPurchased}/>
                                            <label className="form-check-label">Farm Breed</label>
                                            <input className="purchased" 
                                                   type="radio" 
                                                   name="priorityOptions" 
                                                   id="PurchasedFromMarket" 
                                                   value="Purchased" 
                                                   checked={purchased===true} 
                                                   onChange={onChangeFarmPurchased}/>
                                            <label className="form-check-label">Purchased</label>
                                        </div>
                                       
                                    </div>
                                    <div className="form-group col-md-6">
                                        </div>
                                    <div className="form-group col-md-6">
                                            <label >Purcased Bird Record Number</label>
                                            <input type="text" onClick={onChangeBirdName} className="form-control" placeholder="Bird Record Name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Purchased Rate </label>
                                            <input type="text" onClick={onChangeBirdName} className="form-control" placeholder="Rate"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Purchased Date </label>
                                            <input type="text" onClick={onChangeBirdName} className="form-control" placeholder="Date"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Purchased Contact Number </label>
                                            <input type="text" onClick={onChangeBirdName} className="form-control" placeholder="Contact Number"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Purchased Details </label>
                                            <input type="text" onClick={onChangeBirdName} className="form-control" placeholder="Details"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <label>Father Details</label>
                                        <select className="form-control select2" style={{ "width": "100%" }}>
                                            <option >Blue Opline</option>
                                            <option>Green Opline</option>
                                        </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Mother Details</label>
                                            <select className="form-control select2" style={{ "width": "100%" }}>
                                                <option >Green Opline</option>
                                                <option>Red Opline</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Hatch Date: </label>
                                            <input type="text" onClick={onChangeBirdName} className="form-control" placeholder="Hatch Date"/>
                                        </div> */}
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