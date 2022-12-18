import MiddleWrapper from "../layout/MiddleWrapper";
import { Link } from 'react-router-dom';
import "./chicks.css";
const Chicks = () => {
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title head">Chicks Record</h3>

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
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Bird ID Number</th>
                                            <th>Bird Source</th>
                                            <th>Bird Name</th>
                                            <th>Ring Number</th>
                                            <th>Gender</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>183</td>
                                            <td>156712</td>
                                            <td>Green Opline</td>
                                            <td>ZBF162216</td>
                                            <td>DNA Male</td>
                                            <td>
                                                <div className="customActions">
                                                    <div className="del"><i className="fas fa-trash "></i></div>
                                                    <Link to="/view/chicks">
                                                        <div className="view"><i class='fas fa-book '></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>183</td>
                                            <td>156712</td>
                                            <td>Green Opline</td>
                                            <td>ZBF162216</td>
                                            <td>DNA Male</td>
                                            <td>
                                                <div className="customActions">
                                                    <div><i className="fas fa-trash del"></i></div>
                                                    <Link to="/view/chicks">
                                                        <div><i class='fas fa-book view'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>183</td>
                                            <td>156712</td>
                                            <td>Green Opline</td>
                                            <td>ZBF162216</td>
                                            <td>DNA Male</td>
                                            <td>
                                                <div className="customActions">
                                                    <div><i className="fas fa-trash del"></i></div>
                                                    <Link to="/view/chicks">
                                                        <div><i class='fas fa-book view'></i></div>
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

export default Chicks;