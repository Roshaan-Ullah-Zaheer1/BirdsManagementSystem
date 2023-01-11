import MiddleWrapper from "../layout/MiddleWrapper";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./AllBirds.css";
import { useEffect, useState } from "react";


const AllBirds = () => {

    const [birds, setBirds] = useState([]);
    const [birdsCount, setBirdsCount] = useState(0);

    const navigate = useNavigate();
    const editLink = (id) => {
        let path = "/birds/edit:" + id;
        navigate(path);
    }
    const viewLink = (id) => {
        let path = "/birds/view:" + id;
        navigate(path);
    }

    const deleteBird = (id) => {
        axios.delete('http://localhost:4000/bird/delete/' + id)
            .then((res) => {
                birds = birds.filter(x => x._id !== id);
                setBirds(birds);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        axios.get('http://localhost:4000/bird/')
            .then((res) => {
                let data = res.data;
                let birdsList = data.map((item) => {
                    return (
                        <tr key={item._id}>
                            <td>{item.serialNumber}</td>
                            <td>{item.name}</td>
                            <td>{item.ringNumber}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>
                                <div className="customActions">
                                    <div onClick={() => { editLink(item._id) }}><i className="fas fa-edit customEdit"></i></div>
                                    <div onClick={() => { deleteBird(item._id) }}><i className="fas fa-trash customDel"></i></div>
                                    <div onClick={() => { viewLink(item._id) }}><i class='fas fa-book customView'></i></div>
                                </div>
                            </td>
                        </tr>
                    );
                });
                setBirds(birdsList);
                setBirdsCount(birdsList.length);
            })
            .catch(err => {
                console.log(err);
            });
    }, [birds]);

    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Birds Record
                                    {birdsCount > 0 ? ` (Birds count: ${birdsCount})` : ''}
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
                                    <Link to="/birds/create">
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Bird</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Bird Id Number</th>
                                            <th>Bird Name</th>
                                            <th>Ring Number</th>
                                            <th>Age</th>
                                            <th>Gender</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {birds}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MiddleWrapper>);
}

export default AllBirds;