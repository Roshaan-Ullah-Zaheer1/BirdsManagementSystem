import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import "./ViewBird.css";
const ViewBird = () => {
    return (<MiddleWrapper >
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card-primary card-outline">
                            <div className="card-body box-profile">
                                <div className="text-center">
                                    <img className="profile-user-img img-fluid img-circle"
                                        src={mainLogo}
                                        alt="User profile picture" />
                                </div>
                                <h3 className="profile-username text-center">Green Opline</h3>
                                <p className="text-muted text-center">Split Blue</p>
                                <ul className="list-group list-group-unbordered mb-3">
                                    <li className="list-group-item">
                                        <b>Bird ID Number</b> <a className="float-right">123</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Bird Source</b> <a className="float-right">123456</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Ring Number</b> <a className="float-right">Zbf162223</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Gender</b> <a className="float-right">DNA Male</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Age</b> <a className="float-right">5 Months</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Hatch Date</b> <a className="float-right">N/A</a>
                                    </li>
                                </ul>
                            </div>
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
                                                    <hr/>
                                                    <div className="user-block">
                                                        <span>
                                                            <p className="details">Name:</p>
                                                            <p className="details1">Albino Red Eye</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird ID Number:</p>
                                                            <p className="details1">123</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird Source:</p>
                                                            <p className="details1">Market</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Ring Number:</p>
                                                            <p className="details1">ACP Zbf162223</p>
                                                        </span>
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
                                                    <div className="heading">Mother</div>
                                                    <hr/>
                                                        <span>
                                                            <p className="details">Name:</p>
                                                            <p className="details1">Albino Black Eye/Red Eye</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird ID Number:</p>
                                                            <p className="details1">456</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird Source:</p>
                                                            <p className="details1">Market</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Ring Number:</p>
                                                            <p className="details1">ACP Zbf162254</p>
                                                        </span>
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
                                                    <hr/>
                                                        <span>
                                                            <p className="details">Purchased Bird Name:</p>
                                                            <p className="details1">Slatty</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Purchased Bird Ring Number:</p>
                                                            <p className="details1">ACP Zbf162223</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Purchased Rate:</p>
                                                            <p className="details1">Rs.45000</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Purchaser Contact Number:</p>
                                                            <p className="details1">0320-2860360</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Detail Of Bird:</p>
                                                            <p className="details1">Healty and clean nails</p>
                                                        </span>
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