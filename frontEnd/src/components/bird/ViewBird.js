import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import "./ViewBird.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const ViewBird = () => {
    const [birdData, setBirdData] = useState(null);
    const [birdFather, setBirdFather] = useState(null);
    const [birdMother, setBirdMother] = useState(null);
    const [purchased, setPurchased] = useState(null);

    let { id } = useParams();
    id = id.slice(1);

    useEffect(() => {
        axios.get('http://localhost:4000/bird/' + id)
            .then((res) => {
                let data = res.data;
                let bird = (<div className="card-body box-profile">
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
                            <b>Cage Number</b> <a className="float-right">{data.cageNumber}</a>
                        </li>

                    </ul>
                </div>);
                setBirdData(bird);
                if (data.birdSource == "Farm Breed") {
                    axios.get('http://localhost:4000/farmbreed/getByBird/' + id)
                        .then(res => {
                            let farmBreedObj = res.data;
                            axios.get('http://localhost:4000/bird/' + farmBreedObj.fatherId)
                                .then((res) => {
                                    let father = (<div className="user-block">
                                        <span>
                                            <p className="details">Name:</p>
                                            <p className="details1">{res.data.name}</p>
                                        </span>
                                        <span>
                                            <p className="details">Bird ID Number:</p>
                                            <p className="details1">{res.data.serialNumber}</p>
                                        </span>
                                        <span>
                                            <p className="details">Bird Source:</p>
                                            <p className="details1">{res.data.birdSource}</p>
                                        </span>
                                        <span>
                                            <p className="details">Ring Number:</p>
                                            <p className="details1">{res.data.ringNumber}</p>
                                        </span>
                                    </div>);
                                    setBirdFather(father);
                                })
                                .catch(err => {
                                });
                            axios.get('http://localhost:4000/bird/' + farmBreedObj.motherId)
                                .then((res) => {
                                    let mother = (<div className="user-block">
                                        <span>
                                            <p className="details">Name:</p>
                                            <p className="details1">{res.data.name}</p>
                                        </span>
                                        <span>
                                            <p className="details">Bird ID Number:</p>
                                            <p className="details1">{res.data.serialNumber}</p>
                                        </span>
                                        <span>
                                            <p className="details">Bird Source:</p>
                                            <p className="details1">{res.data.birdSource}</p>
                                        </span>
                                        <span>
                                            <p className="details">Ring Number:</p>
                                            <p className="details1">{res.data.ringNumber}</p>
                                        </span>
                                    </div>);
                                    setBirdMother(mother);
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                        })
                        .catch(err => {
                            console.log("error in getting data from farm breed");
                        });
                }
                else {
                    axios.get('http://localhost:4000/purchased/getByBird/' + id)
                        .then(res => {
                            let data = res.data;
                            let purchaseBird = (<div className="user-block">
                                <span>
                                    <p className="details">Purchased Rate:</p>
                                    <p className="details1">{data.purchasedPrice}</p>
                                </span>
                                <span>
                                    <p className="details">Seller Name:</p>
                                    <p className="details1">{data.sellerName}</p>
                                </span>
                                <span>
                                    <p className="details">Seller Contact Number:</p>
                                    <p className="details1">{data.sellerPhoneNumber}</p>
                                </span>
                                <span>
                                    <p className="details">Seller Details:</p>
                                    <p className="details1">{data.sellerDetails}</p>
                                </span>
                                <span>
                                    <p className="details">Purchased Date:</p>
                                    <p className="details1">{data.purchasedDate}</p>
                                </span>
                            </div>);
                            setPurchased(purchaseBird);
                        })
                        .catch(err => {
                            console.log("error in getting data from Purchased Tabel");
                        });
                    }
            })
            .catch(err => {
                console.log("error in getting data from Purchased");
            });
    }, []);

return (<MiddleWrapper >
    <section className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card card-primary card-outline">
                        {birdData}
                    </div>
                </div>
                <div className="col-md-9 card card-primary card-outline customCard">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            <div className="post">
                                                <div className="heading">Father</div>
                                                <hr />
                                                {birdFather}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            <div className="post">
                                                <div className="user-block">
                                                    <div className="heading">Mother</div>
                                                    <hr />
                                                    {birdMother}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            <div className="post">
                                                <div className="user-block">
                                                    <div className="heading">Details</div>
                                                    <hr />
                                                    {purchased}
                                                </div>
                                            </div>
                                        </div>
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
export default ViewBird;