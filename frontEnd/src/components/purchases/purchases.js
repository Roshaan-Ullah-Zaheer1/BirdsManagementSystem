import MiddleWrapper from "../layout/MiddleWrapper";
import { Link, useNavigate } from 'react-router-dom';
import "./purchases.css";
import { useEffect,useState } from "react";
import axios from 'axios';
const PurchaseBirds = () => {
    const [purchasesCount, setPurchasesCount] = useState(0);
    const [purchasesList, setPurchasesList] = useState([]);
    let birdsList = null;
    const navigate = useNavigate();
    const editLink = (id) => {
        let path = "/purchases/edit:"+id;
        navigate(path);
    }
    const viewLink = (id) => {
        let path = "/purchases/view:"+id;
        navigate(path);
    }

    const getBirdSerialNumber = (id)=>{
        let bird = birdsList.find(x=>x._id === id);
        return bird.serialNumber;
    }
    const deletePurchasedBird = (id) => {
        axios.delete('http://localhost:4000/purchased/delete/' + id)
            .then((res) => {
                let data = purchasesList.filter(x => x._id !== id);
                setPurchasesList(data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(()=>{
        axios.get('http://localhost:4000/bird/')
            .then((res) => {
                birdsList = res.data;
            })
            .catch(err=>{
                console.log(err);
            });

        axios.get('http://localhost:4000/purchased/')
            .then((res) => {
                let data = res.data;
                let purchases = data.map((item)=>{
                    return (
                        <tr key={item._id}>
                        <td>{getBirdSerialNumber(item.bird)}</td>
                        <td>{item.purchasedDate}</td>
                        <td>{item.purchasedPrice}</td>
                        <td>{item.sellerName}</td>
                        <td>{item.sellerPhoneNumber}</td>
                        
                        <td>
                            <div className="customActions">
                                <div onClick={()=>{editLink(item._id)}}><i className="fas fa-edit customEdit"></i></div>
                                <div onClick={() => {deletePurchasedBird(item._id) }}><i className="fas fa-trash customDel"></i></div>
                                <div onClick={()=>{viewLink(item._id)}}><i class='fas fa-book customView'></i></div>
                            </div>
                        </td>
                    </tr>
                    );
                });    
                setPurchasesList(purchases);
                setPurchasesCount(purchases.length);
            })
            .catch(err=>{
                console.log(err);
            });
    },[purchasesList]);
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Purchase Birds Record
                                {purchasesCount>0 ? ` (Birds count: ${purchasesCount})` : ''}
                                </h3>
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
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Record</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Bird ID Number</th>
                                            <th>Purchased Date</th>
                                            <th>Bird Price</th>
                                            <th>Seller Name</th>
                                            <th>Seller Phone Number</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {purchasesList}
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