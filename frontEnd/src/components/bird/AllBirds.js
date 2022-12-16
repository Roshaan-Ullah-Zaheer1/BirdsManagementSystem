import MiddleWrapper from "../layout/MiddleWrapper";
import "./AllBirds.css";
const AllBirds = () => {
    return (<MiddleWrapper heading={"All birds"}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">All Birds Record</h3>

                                <div className="card-tools">
                                    <div className="input-group input-group-sm" style={{"width": "150px;"}}>
                                        <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />

                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-default">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0" style={{"height": "300px;"}}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Record Number</th>
                                            <th>Bird Name</th>
                                            <th>Ring Number</th>
                                            <th>Age</th>
                                            <th>Gender</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>183</td>
                                            <td>Green Opline</td>
                                            <td>ZBF162216</td>
                                            <td>5 Months</td>
                                            <td>DNA Male</td>
                                            <td>
                                                <button type="submit" className="btn btn-block btn-outline-dark btn-sm detail_button">View Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                        <td>109</td>
                                            <td>Palefellow Opline</td>
                                            <td>ZBF162255</td>
                                            <td>1 Months</td>
                                            <td>Unknown</td>
                                            <td>
                                                <button type="submit" className="btn btn-block btn-outline-dark btn-sm detail_button">View Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>154</td>
                                            <td>Blue Opline</td>
                                            <td>ZBF162221</td>
                                            <td>10 Months</td>
                                            <td>DNA Female</td>
                                            <td>
                                                <button type="submit" className="btn btn-block btn-outline-dark btn-sm detail_button">View Details</button>
                                            </td>
                                        </tr>
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