import MiddleWrapper from "../layout/MiddleWrapper";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import "./dashboard.css";
import bg from "./bg.jpg";

const Daybook = () => {
  const [birdsCount, setBirdsCount] = useState([]);
  const [maleBirdsCount, setMaleBirdCounts] = useState([]);
  const [femaleBirdsCount, setFemaleBirdsCount] = useState([]);
  const [pairsCount, setPairsCount] = useState([]);
  const [cagesCount, setCagesCount] = useState([]);
  const [soldBirds, setSoldBirds] = useState([]);
  const [purchasedBirdsCount, setPurchasedBirdsCount] = useState([]);
  const [farmBreedBirdsCount, setFarmBreedBirdsCount] = useState([]);
  const [unPairedBirdCounts, setUnPairedBirdCounts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/bird/')
        .then((res) => {
            let data = res.data;
            let length = data.length;
            setBirdsCount(length);
            let maleBirds = data.filter(x=>x.gender === "Male");
            length = maleBirds.length;
            setMaleBirdCounts(length);
            let femaleBirds = data.filter(x=>x.gender === "Female");
            length = femaleBirds.length;
            setFemaleBirdsCount(length);
            let cages = data.map(item => item.cageNumber).filter((value, index, self) => self.indexOf(value) === index);
            length = cages.length;
            setCagesCount(length);
            let unpairedBirds = data.filter(x=>x.isPaired === false);
            length = unpairedBirds.length;
            setUnPairedBirdCounts(length);
        })
        .catch(err => {
            console.log(err);
        });

        axios.get('http://localhost:4000/pair/')
        .then((res) => {
            let data = res.data;
            let length = data.length
            setPairsCount(length)
        })
        
        .catch(err => {
            console.log(err);
        })
        axios.get('http://localhost:4000/farmbreed/')
        .then((res) => {
            let data = res.data;
            let length = data.length;
            setFarmBreedBirdsCount(length);
        })
        .catch(err => {
            console.log(err);
        })

        axios.get('http://localhost:4000/purchased/')
        .then((res) => {
            let data = res.data;
            let length = data.length
            setPurchasedBirdsCount(length)
        })
        
        .catch(err => {
            console.log(err);
        })
        axios.get('http://localhost:4000/sale/')
        .then((res) => {
            let data = res.data;
            let length = data.length
            setSoldBirds(length)
        })
        
        .catch(err => {
            console.log(err);
        })
        ;
}, [birdsCount],[pairsCount],[farmBreedBirdsCount],[purchasedBirdsCount],[soldBirds]);

  return (<MiddleWrapper heading={""}>

    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
               {/* style={{ backgroundImage:`url(${bg})`}} */}
              <div className="card-header">
                <div className="row dashboardCards">
                  <div className="col-lg-4 col-6">
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>{birdsCount}</h3>
                        <p>Total Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                     <Link to="/birds" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>{femaleBirdsCount}</h3>

                        <p>Female Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/birds" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="small-box" style={{backgroundColor:"#a352d1"}}>
                      <div className="inner">
                        <h3>{maleBirdsCount}</h3>

                        <p>Male Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/birds" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div> <div className="col-lg-4 col-6">
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>{pairsCount}</h3>

                        <p>Total Pairs</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/pairs" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="small-box" style={{backgroundColor:"#eead1b"}}>
                      <div className="inner">
                        <h3>{cagesCount}</h3>
                        <p>Total Cages</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/cages" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="small-box"  style={{backgroundColor:"#394bc4"}}>
                      <div className="inner">
                        <h3>{soldBirds}</h3>

                        <p>Total Sold Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/sales" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                    <div className="small-box" style={{backgroundColor:"#95e747"}}>
                      <div className="inner">
                        <h3>{purchasedBirdsCount}</h3>

                        <p>Total Purchased Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/purchases" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                  <div className="small-box" style={{backgroundColor:"#83565c"}}>
                      <div className="inner">
                        <h3>{farmBreedBirdsCount}</h3>

                        <p>Total Farm Breed Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/birds" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-6">
                  <div className="small-box" style={{backgroundColor:"#0b615d"}}>
                      <div className="inner">
                        <h3>{unPairedBirdCounts}</h3>

                        <p>Total Unpaired Birds</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <Link to="/birds" className="small-box-footer">
                        More info <i className="fas fa-arrow-circle-right"></i>
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

export default Daybook;