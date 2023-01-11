import MiddleWrapper from "../layout/MiddleWrapper";
import { Link } from 'react-router-dom';
import "./cage.css";
import axios from 'axios';
import { useEffect, useState } from "react";
const Cages = () => {

    const [cagesWiseBirds, setCagesWiseBirds] = useState([]);

    const getInnerRows = (data, cage) => {
        return data.map((item) => {
            if (item.cageNumber === cage) {
                return (
                    <div class="cageRows">
                        <div>{item.name}</div>
                        <div>{item.serialNumber}</div>
                        <div>{item.birdSource}</div>
                        <div>{item.ringNumber}</div>
                        <div>{item.gender}</div>
                    </div>
                );
            }
        });
    }
    
    useEffect(() => {
        axios.get('http://localhost:4000/bird')
            .then((res) => {
                let data = res.data;
                data = data.sort((p1, p2) => (p1.cageNumber > p2.cageNumber) ? 1 : (p1.cageNumber < p2.cageNumber) ? -1 : 0);
                let cages = data.map(item => item.cageNumber).filter((value, index, self) => self.indexOf(value) === index);
                let birdsList = cages.map((cage) => {
                    return (<div className="row tableRow"> 
                        <div className="col-md-2 customSpan">{cage}</div>
                        <div className="col-md-10">
                            {getInnerRows(data, cage)}
                            <div />
                        </div>
                    </div>);
                });
                setCagesWiseBirds(birdsList);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (<MiddleWrapper heading={""}>
        <section className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Cage Wise Birds</h3>
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
                            <div className="centerAlign">

                                <div className="row tableHeading">
                                    <div className="col-md-2">Cage Number</div>
                                    <div className="col-md-2">Bird Name</div>
                                    <div className="col-md-2">Bird Id Number</div>
                                    <div className="col-md-2">Bird Source Number</div>
                                    <div className="col-md-2">Ring Number</div>
                                    <div className="col-md-2">Gender</div>
                                </div>
                                {cagesWiseBirds}
                                {/* <div className="row tableRow">
                                    <div className="col-md-2 customSpan">1</div>
                                    <div className="col-md-10">
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div />
                                    </div>
                                </div>
                                <div className="row tableRow">
                                    <div className="col-md-2 customSpan">1</div>
                                    <div className="col-md-10">
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div />
                                    </div>
                                </div>
                                <div className="row tableRow">
                                    <div className="col-md-2 customSpan">1</div>
                                    <div className="col-md-10">
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        
                                        <div />
                                    </div>
                                </div>
                                <div className="row tableRow">
                                    <div className="col-md-2 customSpan">1</div>
                                    <div className="col-md-10">
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div />
                                    </div>
                                </div>
                                <div className="row tableRow">
                                    <div className="col-md-2 customSpan">1</div>
                                    <div className="col-md-10">
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div class="cageRows">
                                            <div>Green Opline</div>
                                            <div>143</div>
                                            <div>ZBF1662223</div>
                                            <div>Male</div>
                                            <div>124123</div>     
                                        </div>
                                        <div />
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MiddleWrapper>);
}

export default Cages;