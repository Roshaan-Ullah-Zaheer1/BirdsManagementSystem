import MiddleWrapper from "../layout/MiddleWrapper";
import mainLogo from './../../dist/img/bird.jpeg';
import "./ViewPair.css";
const ViewSingleBird = () => {
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
                                    <b>Record Number</b> <a className="float-right">123</a>
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
                <div className="col-md-3">
                    <div className="card card-primary card-outline">
                        <div className="card-body box-profile">
                            <div className="text-center">
                                <img className="profile-user-img img-fluid img-circle"
                                    src={mainLogo}
                                    alt="User profile picture" />
                            </div>
                            <h3 className="profile-username text-center">Blue Opline</h3>
                            <p className="text-muted text-center">Female</p>
                            <ul className="list-group list-group-unbordered mb-3">
                                <li className="list-group-item">
                                    <b>Record Number</b> <a className="float-right">981</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Ring Number</b> <a className="float-right">Zbf162267</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Gender</b> <a className="float-right">DNA Female</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Age</b> <a className="float-right">9 Months</a>
                                </li>
                                <li className="list-group-item">
                                    <b>Hatch Date</b> <a className="float-right">N/A</a>
                                </li>
                            </ul>
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
                                        <div className="heading">Other Details</div>
                                                    <hr/>
                                            <span>
                                                <p className="details">Date Of Pairing:</p>
                                                <p className="details1">12-10-22</p>
                                            </span>
                                            <span>
                                                <p className="details">Comments:</p>
                                                <p className="details1">Healthy Pair</p>
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
        </section>
    </MiddleWrapper>);
}
export default ViewSingleBird;