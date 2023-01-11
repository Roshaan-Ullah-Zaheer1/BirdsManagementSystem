import MiddleWrapper from "../layout/MiddleWrapper";
import { Link } from 'react-router-dom';
import "./profitloss.css";
const ProfitLoss = () => {
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 card ">
                        <div className="card-header">
                            <h3 className="card-title">Profit/Loss Statements</h3>
                        </div>
                        {/* <div className="col-12 table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Qty</th>
                                        <th>Product</th>
                                        <th>Serial #</th>
                                        <th>Description</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Call of Duty</td>
                                        <td>455-981-221</td>
                                        <td>El snort testosterone trophy driving gloves handsome</td>
                                        <td>$64.50</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Need for Speed IV</td>
                                        <td>247-925-726</td>
                                        <td>Wes Anderson umami biodiesel</td>
                                        <td>$50.00</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Monsters DVD</td>
                                        <td>735-845-642</td>
                                        <td>Terry Richardson helvetica tousled street art master</td>
                                        <td>$10.70</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Grown Ups Blue Ray</td>
                                        <td>422-568-642</td>
                                        <td>Tousled lomo letterpress</td>
                                        <td>$25.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                    <div className="col-12 table responsive">
                        <table className="table table-striped">
                            <div className="table-responsive">
                                <table className="table">
                                    <tr>
                                        <th style={{ "width": "50%" }}>Total Investment:</th>
                                        <td>Rs.4500000</td>
                                    </tr>
                                    <tr>
                                        <th>Total Expenses:</th>
                                        <td>Rs.300500</td>
                                    </tr>
                                    <tr>
                                        <th>Total Sold Birds:</th>
                                        <td>Rs.5500000</td>
                                    </tr>
                                    <tr>
                                        <th>TotalPurchased Birds:</th>
                                        <td>Rs.1000000</td>
                                    </tr>
                                    <tr>
                                        <th>Profit/Loss</th>
                                        <td className= "profit">Rs.1200000</td>
                                    </tr>

                                </table>
                            </div>
                        </table>
                    </div>
                    {/* <div className="row">
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
                                                        <div><i className='fas fa-book customView'></i></div>
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
                                                        <div><i className='fas fa-book customView'></i></div>
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
                                                        <div><i className='fas fa-book customView'></i></div>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    </MiddleWrapper>);
}

export default ProfitLoss;