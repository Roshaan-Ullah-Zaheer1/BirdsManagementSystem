import MiddleWrapper from "../layout/MiddleWrapper";
import { Link } from 'react-router-dom';
import "./AllPair.css";
const AllPair = () => {
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Pairs Record</h3>
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
                                    <Link to="/add/pair">
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Pair</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="centerAlign">

                                <div className="row tableHeading">
                                    <div className="col-md-2">Pair Number</div>
                                    <div className="col-md-2">Record Number</div>
                                    <div className="col-md-2">Bird Name</div>
                                    <div className="col-md-2">Ring Number</div>
                                    <div className="col-md-2">Gender</div>
                                    <div className="col-md-2">Details</div>
                                </div>
                                <div className="row tableRow">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2 customSpan1">1</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2 customSpan">
                                        <div className="customActions1">
                                            <Link to="/pair/edit">
                                                <div><i className="fas fa-edit customEdit"></i></div>
                                            </Link>
                                            <div><i className="fas fa-trash customDel"></i></div>
                                            <Link to="/pair/view">
                                                <div><i class='fas fa-book customView'></i></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row tableRow">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2 customSpan1">1</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2">abc</div>
                                    <div className="col-md-2 customSpan">
                                        <div className="customActions1">
                                            <Link to="/pair/edit">
                                                <div><i className="fas fa-edit customEdit"></i></div>
                                            </Link>
                                            <div><i className="fas fa-trash customDel"></i></div>
                                            <Link to="/pair/view">
                                                <div><i class='fas fa-book customView'></i></div>
                                            </Link>
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

export default AllPair;