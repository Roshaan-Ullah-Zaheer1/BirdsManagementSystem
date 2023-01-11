import MiddleWrapper from "../layout/MiddleWrapper";
import { Link, useNavigate } from 'react-router-dom';
import "./chicks.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
const Chicks = () => {
    const [birdsCount, setBirdsCount] = useState(0);
    const [chicksList, setChicksList] = useState(null);
    const navigate = useNavigate();
    
    const viewLink = (id) => {
        let path = "/chicks/view:" + id;
        navigate(path);
    }
    useEffect(() => {
        axios.get('http://localhost:4000/bird/')
            .then((res) => {
                let data = res.data;
                data = data.filter(x => x.birdSource === "Farm Breed");                
                let birdsList = data.map((item) => {
                    return (    
                        <tr>
                            <td>{item.serialNumber}</td>
                            <td>{item.birdSource}</td>
                            <td>{item.name}</td>
                            <td>{item.ringNumber}</td>
                            <td>{item.gender}</td>
                            <td>
                                <div className="customActions">
                                    <div onClick={() => { viewLink(item._id) }}><i class='fas fa-book customView1'></i></div>
                                </div>
                            </td>
                        </tr>
                    );
                });
                setChicksList(birdsList);
                setBirdsCount(birdsList.length);
            })
    
        .catch(err => {
            console.log(err);
        });


}, []);
return (<MiddleWrapper heading={""}>
    <section className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title head">Chicks Record
                            {birdsCount>0 ? ` (Birds count: ${birdsCount})` : ''}
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
                            </div>
                        </div>
                        <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                            <table className="table table-head-fixed text-nowrap">
                                <thead>
                                    <tr>
                                        <th>Bird ID Number</th>
                                        <th>Bird Source</th>
                                        <th>Bird Name</th>
                                        <th>Ring Number</th>
                                        <th>Gender</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chicksList}
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

export default Chicks;