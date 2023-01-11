import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import "./ViewPurchaseBird.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
const ViewPurchase = () => {
    const [birdData, setBirdData] = useState(null);
    const [purchasedData, setPurchasedData] = useState(null);

    let { id } = useParams();
    id = id.slice(1);

    useEffect(() => {
        axios.get('http://localhost:4000/purchased/' + id)
            .then(res => {
                console.log(res.data);
                let purchasedBirdObj = res.data;
                let purchased = (<div className="row">

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="active tab-pane" id="activity">
                                    <div className="post">
                                        <div className="user-block">
                                            <span>
                                                <p className="details">Seller Name:</p>
                                                <p className="details1">{purchasedBirdObj.sellerName}</p>
                                            </span>
                                            <span>
                                                <p className="details">Seller Phone Number:</p>
                                                <p className="details1">{purchasedBirdObj.sellerPhoneNumber}</p>
                                            </span>
                                            <span>
                                                <p className="details">Seller Details:</p>
                                                <p className="details1">{purchasedBirdObj.sellerDetails}</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="active tab-pane" id="activity">
                                    <div className="post">
                                        <div className="user-block">
                                            <span>
                                                <p className="details">Purchased Date:</p>
                                                <p className="details1">{purchasedBirdObj.purchasedDate}</p>
                                            </span>
                                            <span>
                                                <p className="details">Bird price:</p>
                                                <p className="details1">{purchasedBirdObj.purchasedPrice}</p>
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
                setPurchasedData(purchased);


                axios.get('http://localhost:4000/bird/' + purchasedBirdObj.bird)
                    .then((res) => {
                        debugger;
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
                                    <b>Hatch Date</b> <a className="float-right">N/A</a>
                                </li>

                            </ul>
                        </div>);
                        setBirdData(bird);
                    })
                    .catch(err => {
                        console.log("error in getting data from bird by id");
                    });
            })
            .catch(err => {
                console.log("error in getting data from sales by id");
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
                        <div className="heading">Other Details</div>
                        {purchasedData}
                    </div>
                </div>
            </div>

        </section>
    </MiddleWrapper>);
}
export default ViewPurchase;