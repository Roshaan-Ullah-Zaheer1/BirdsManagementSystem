import "./daybook.css";
import MiddleWrapper from "../layout/MiddleWrapper";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";
const Daybook = () => {
    const [daybook, setDaybook] = useState([]);
    const [expensesCount, setExpensesCount] = useState(0);

    const navigate = useNavigate();
    const editLink = (id) => {
        let path = "/birds/edit:" + id;
        navigate(path);
    }
    const deleteExpense = (id) => {
        axios.delete('http://localhost:4000/daybook/delete/' + id)
            .then((res) => {
                daybook = daybook.filter(x => x._id !== id);
                setDaybook(daybook);
            })
            .catch(err => {
                console.log(err);
            });
    }
    useEffect(() => {
        axios.get('http://localhost:4000/daybook/')
            .then((res) => {
                let data = res.data;
                let daybookList = data.map((item) => {
                    return (
                        <tr>
                            <td>{item.dateOfExpense}</td>
                            <td>{item.amountOfExpense}</td>
                            <td>{item.nameOfExpense}</td>
                            <td>{item.typeOfExpense}</td>
                            <td>{item.detailOfExpense}</td>
                            <td>
                                <div className="customActions">
                                    <div onClick={() => { editLink(item._id) }}><i className="fas fa-edit customEdit"></i></div>
                                    <div onClick={() => { deleteExpense(item._id) }}><i className="fas fa-trash customDel"></i></div>
                                </div>
                            </td>
                        </tr>
                    );
                });
                setDaybook(daybookList);
                setExpensesCount(daybookList.length);
            })
            .catch(err => {
                console.log(err);
            });
    }, [daybook]);
    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">DayBook
                                    {expensesCount > 0 ? ` (Expense count: ${expensesCount})` : ''}
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
                                    <Link to="/daybook/add">
                                        <button type="submit" className="btn btn-outline-dark btn-sm AddButton">Add Expense</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body table-responsive p-0 center" style={{ "height": "300px;" }}>
                                <table className="table table-head-fixed text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Date Of Expense</th>
                                            <th>Amount Of Expense</th>
                                            <th>Name Of Expense</th>
                                            <th>Type Of Expense</th>
                                            <th>Details Of Expense</th>
                                            <th>Del / Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {daybook}
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

export default Daybook;