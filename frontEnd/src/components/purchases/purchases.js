import MiddleWrapper from "../layout/MiddleWrapper";
import { Link } from 'react-router-dom';
import "./purchases.css";
const PurchaseBirds = () => {
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Purchase Birds Record</h3>

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
                                    <Link to="/purchases/add">
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Bird</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Bird ID Number</th>
                                            <th>Bird Name</th>
                                            <th>Ring Number</th>
                                            <th>Purchase Amount</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>183</td>
                                            <td>Green Opline</td>
                                            <td>ZBF162216</td>
                                            <td>Rs.450000</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/purchases/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/purchases/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>109</td>
                                            <td>Palefellow Opline</td>
                                            <td>ZBF162255</td>
                                            <td>Rs.12000</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/sold/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/sold/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>154</td>
                                            <td>Blue Opline</td>
                                            <td>ZBF162221</td>
                                            <td>Rs.70000</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/purchases/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/purchases/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>123</td>
                                            <td>Pink Opline</td>
                                            <td>ZBF162222</td>
                                            <td>Rs.1210000</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/purchases/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/purchases/view">
                                                        <div><i class='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>111</td>
                                            <td>Green Opline</td>
                                            <td>ZBF162223</td>
                                            <td>Rs.20000</td>
                                            <td>
                                                <div className="customActions">
                                                    <Link to="/purchases/edit">
                                                        <div><i className="fas fa-edit customEdit"></i></div>
                                                    </Link>
                                                    <div><i className="fas fa-trash customDel"></i></div>
                                                    <Link to="/purchases/view">
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

export default PurchaseBirds;