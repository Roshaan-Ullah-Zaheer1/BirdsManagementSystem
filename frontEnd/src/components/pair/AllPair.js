import MiddleWrapper from "../layout/MiddleWrapper";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./AllPair.css";

const AllPair = () => {
    const [pairs, setPairs] = useState([]);
    const [pairsCount, setPairsCount] = useState(0);
    let birds = null;
    const navigate = useNavigate();
    const editLink = (id) => {
        let path = "/pair/edit:" + id;
        navigate(path);
    }
    const viewLink = (id) => {
        let path = "/pair/view:" + id;
        navigate(path);
    }

    const getBird = (id) => {
        let model = birds.find(x => x._id === id);
        return model;
    }
    const deletePair = (id) => {
        axios.delete('http://localhost:4000/pair/delete/' + id)
            .then((res) => {
                console.log("pairdeleted " + id);
                let data = pairs.filter(x => x._id !== id);
                console.log(data);
                setPairs(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        axios.get('http://localhost:4000/bird/')
            .then((response) => { return response.data })
            .then((res) => {
                birds = res;
            })
            .catch(err => {
                console.log(err);
                console.log("Error fetching all birds!");
            });

        axios.get('http://localhost:4000/pair/')
            .then((res) => {
                let data = res.data;
                let counter = 0;
                let pairsList = data.map((item) => {
                    let father = getBird(item.maleId);
                    let mother = getBird(item.femaleId);
                    return (
                        <div className="row tableRow">
                            <div className="col-md-2 customSpan">{++counter}</div>
                            <div className="col-md-8">
                                <div class="pairRows">
                                    <div>{father.serialNumber}</div>
                                    <div>{father.name}</div>
                                    <div>{father.ringNumber}</div>
                                    <div>{father.gender}</div>
                                </div>
                                <div class="pairRows">
                                    <div>{mother.serialNumber}</div>
                                    <div>{mother.name}</div>
                                    <div>{mother.ringNumber}</div>
                                    <div>{mother.gender}</div>
                                </div>
                                <div />
                            </div>
                            <div className="col-md-2 customSpan">
                                <div className="customActions1">
                                    <div onClick={() => { editLink(item._id) }}><i className="fas fa-edit customEdit"></i></div>
                                    <div onClick={() => { deletePair(item._id) }}><i className="fas fa-trash customDel"></i></div>
                                    <div onClick={() => { viewLink(item._id) }}><i class='fas fa-book customView'></i></div>
                                </div>
                            </div>

                        </div>
                    );
                });
                setPairs(pairsList);
                setPairsCount(pairsList.length);
            })
            .catch(err => {
                console.log(err);
            });

    }, [pairs]);
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Pairs Record
                                {pairsCount > 0 ? ` (Birds count: ${pairsCount})` : ''}
                                </h3>
                                <div className="customTools">
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{ "width": "150px;" }}>
                                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-default">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/pair/add">
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Pair</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="centerAlign">
                                <div className="row tableHeading">
                                    <div className="col-md-2">Pair Number</div>
                                    <div className="col-md-2">Bird Id Number</div>
                                    <div className="col-md-2">Bird Name</div>
                                    <div className="col-md-2">Ring Number</div>
                                    <div className="col-md-2">Gender</div>
                                    <div className="col-md-2">Details</div>
                                </div>
                                {pairs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MiddleWrapper>);
}

export default AllPair;