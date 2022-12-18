import MiddleWrapper from "../layout/MiddleWrapper";
import { Link } from 'react-router-dom';
import "./profitloss.css";
const ProfitLoss = () => {
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Profit/Loss Statements</h3>

                                
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
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
                                                <div className="customActions">
                                                    <Link to="/birds/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/birds/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>109</td>
                                            <td>Palefellow Opline</td>
                                            <td>ZBF162255</td>
                                            <td>1 Months</td>
                                            <td>Unknown</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/birds/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/birds/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>154</td>
                                            <td>Blue Opline</td>
                                            <td>ZBF162221</td>
                                            <td>10 Months</td>
                                            <td>DNA Female</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/birds/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/birds/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
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

export default ProfitLoss;