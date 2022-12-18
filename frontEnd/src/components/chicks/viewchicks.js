import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import "./viewchick.css";
const ViewChick = () => {
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
                                        <b>Hatch Date</b> <a className="float-right">12-04-2022</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9 card card-primary card-outline customCard">
                        <div className="heading">Parent Details</div>
                        <div className="row">

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="tab-content">
                                            <div className="active tab-pane" id="activity">
                                                <div className="post">
                                                <div className="heading">Father</div>
                                                    <hr/>
                                                    <div className="user-block">
                                                        
                                                        <span>
                                                            <p className="details">Bird ID Number:</p>
                                                            <p className="details1">162</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird Source:</p>
                                                            <p className="details1">Market</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird Name:</p>
                                                            <p className="details1">Red Eye</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Gender:</p>
                                                            <p className="details1">DNA Male</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Age:</p>
                                                            <p className="details1">16 Months</p>
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
                                                <div className="heading">Mother</div>
                                                    <hr/>
                                                    <div className="user-block">
                                                    <span>
                                                            <p className="details">Bird ID Number:</p>
                                                            <p className="details1">223</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird Source:</p>
                                                            <p className="details1">Market</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Bird Name:</p>
                                                            <p className="details1">Black Eye</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Gender:</p>
                                                            <p className="details1">DNA Female</p>
                                                        </span>
                                                        <span>
                                                            <p className="details">Age:</p>
                                                            <p className="details1">15 Months</p>
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
export default ViewChick;