import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import "./ViewPurchaseBird.css";
const ViewPurchase = () => {
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
                                <p className="text-muted text-center">Male</p>
                                <ul className="list-group list-group-unbordered mb-3">
                                    <li className="list-group-item">
                                        <b>Bird ID Number</b> <a className="float-right">165</a>
                                    </li>
                                    <li className="list-group-item">
                                        <b>Bird Source</b> <a className="float-right">162223</a>
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
                        <div className="heading">Other Details</div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="active tab-pane" id="activity">
                                                <div className="post">
                                                    <div className="user-block">
                                                        <span>
                                                            <p className="details">Purchase Bird Date:</p>
                                                            <p className="details1">12-10-2022</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird price:</p>
                                                            <p className="details1">Rs.45000</p>
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
                                                            <p className="details">Seller Name:</p>
                                                            <p className="details1">Roshaan Ullah Zaheer</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Seller Phone Number:</p>
                                                            <p className="details1">0320-2860360</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Seller Details:</p>
                                                            <p className="details1">From Tajpura Near Canal Bank</p>
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
export default ViewPurchase;