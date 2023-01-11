import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import { useParams } from 'react-router-dom';
import "./ViewPair.css";
import { useEffect, useState } from "react";
import axios from 'axios';

const ViewSingleBird = () => {

    const [pairFather, setPairFather] = useState(null);
    const [pairMother, setPairMother] = useState(null);
    const [pairData, setPairData] = useState(null);

    let { id } = useParams();
    id = id.slice(1);

    useEffect(() => {
        axios.get('http://localhost:4000/pair/' + id)
            .then(res => {
                let pairObj = res.data;
                let pair = (<div className="user-block">
                    <div className="heading">Other Details</div>
                    <hr />
                    <span>
                        <p className="details">Date Of Pairing:</p>
                        <p className="details1">{pairObj.dateOfPairing}</p>
                    </span>
                    <span>
                        <p className="details">Comments:</p>
                        <p className="details1">{pairObj.comments}</p>
                    </span>
                    {/* <span>
                        <p className="details">Cage Assigned:</p>
                        <p className="details1">{pairObj.cageAssigned}</p>
                    </span> */}
                </div>);
                setPairData(pair);
                axios.get('http://localhost:4000/bird/' + pairObj.maleId)
                    .then((res) => {
                        let data = res.data;
                        let father = (<div className="card-body box-profile">
                            <div className="text-center">
                                <img className="profile-user-img img-fluid img-circle"
                                    src={mainLogo}
                                    alt="User profile picture" />
                            </div>
                            <h3 className="profile-username text-center">{data.name}</h3>
                            <ul className="list-group list-group-unbordered mb-3">
                                <li className="list-group-item">
                                    <b>Bird ID Number</b> <a className="float-right">{data.serialNumber}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Bird Source</b> <a className="float-right">{data.birdSource}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Ring Number</b> <a className="float-right">{data.ringNumber}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Gender</b> <a className="float-right">{data.gender}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Age</b> <a className="float-right">{data.age}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Hatch Date</b> <a className="float-right">N/A</a>
                                </li>

                            </ul>
                        </div>);
                        setPairFather(father);
                    })
                    .catch(err => {
                    });
                axios.get('http://localhost:4000/bird/' + pairObj.femaleId)
                    .then((res) => {
                        let data = res.data;
                        let mother = (<div className="card-body box-profile">
                            <div className="text-center">
                                <img className="profile-user-img img-fluid img-circle"
                                    src={mainLogo}
                                    alt="User profile picture" />
                            </div>
                            <h3 className="profile-username text-center">{data.name}</h3>
                            <ul className="list-group list-group-unbordered mb-3">
                                <li className="list-group-item">
                                    <b>Bird ID Number</b> <a className="float-right">{data.serialNumber}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Bird Source</b> <a className="float-right">{data.birdSource}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Ring Number</b> <a className="float-right">{data.ringNumber}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Gender</b> <a className="float-right">{data.gender}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Age</b> <a className="float-right">{data.age}</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Hatch Date</b> <a className="float-right">N/A</a>
                                </li>

                            </ul>
                        </div>);
                        setPairMother(mother);
                    })
                    .catch(err => {
                    });
            })
            .catch(err => {
                console.log("error in getting data from farm breed");
            });
    }, []);
    return (<MiddleWrapper >
        <section className="content">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3">
                        <div className="card card-primary card-outline">
                            {pairFather}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card card-primary card-outline">
                            {pairMother}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="active tab-pane" id="activity">
                                        <div className="post">
                                            {pairData}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </MiddleWrapper>);
}
export default ViewSingleBird;





