import MiddleWrapper from "../layout/MiddleWrapper";
import { Link , useNavigate } from 'react-router-dom';
import "./sales.css";
import { useEffect,useState } from "react";
import axios from 'axios';
const SoldBirds = () => {
    const [salesCount, setSalesCount] = useState(0);
    const [salesList, setSalesList] = useState([]);
    let birdsList = null;
    const navigate = useNavigate();
    const editLink = (id) => {
        let path = "/sales/edit:"+id;
        navigate(path);
    }
    const viewLink = (id) => {
        let path = "/sales/view:"+id;
        navigate(path);
    }

    const getBirdSerialNumber = (id)=>{
         let bird = birdsList.find(x=>x._id === id);
         return bird.serialNumber;
    }
    const deleteSoldBird = (id) => {
        axios.delete('http://localhost:4000/sale/delete/' + id)
            .then((res) => {
                let data = salesList.filter(x => x._id !== id);
                setSalesList(data);
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

        axios.get('http://localhost:4000/sale/')
            .then((res) => {
                let data = res.data;
                let sales = data.map((item)=>{
                    return (
                        <tr key={item._id}>
                        <td>{getBirdSerialNumber(item.bird)}</td>
                        <td>{item.soldDate}</td>
                        <td>{item.Price}</td>
                        <td>{item.purchaserName}</td>
                        <td>{item.purchaserPhoneNumber}</td>
                        
                        <td>
                            <div className="customActions">
                                <div onClick={()=>{editLink(item._id)}}><i className="fas fa-edit customEdit"></i></div>
                                <div onClick={() => {deleteSoldBird(item._id) }}><i className="fas fa-trash customDel"></i></div>
                                <div onClick={()=>{viewLink(item._id)}}><i class='fas fa-book customView'></i></div>
                            </div>
                        </td>
                    </tr>
                    );
                });    
                setSalesList(sales);
                setSalesCount(sales.length);
            })
            .catch(err=>{
                console.log(err);
            });
    },[salesList]);
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Sold Birds Record
                                {salesCount>0 ? ` (Birds count: ${salesCount})` : ''}
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
                                    <Link to="/sales/add">
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Record</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Bird Id Number</th>
                                            <th>Sold Date</th>
                                            <th>Bird Price</th>
                                            <th>Purchaser Name</th>
                                            <th>Purchaser Phone Number</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salesList}
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

export default SoldBirds;